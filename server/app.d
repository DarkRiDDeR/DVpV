import vibe.d;

shared static this()
{
	auto router = new URLRouter;
  router.get("*", serveStaticFiles("public/"));
	router.get("*", redirectNoLastSlash());
	router.registerWebInterface(new WebInterface);
  router.get("*", serveIndex("public/dist/index.html"));

	auto settings = new HTTPServerSettings;
	settings.port = 8080;
	settings.bindAddresses = ["::1", "127.0.0.1"];
	listenHTTP(settings, router);

	logInfo("Please open http://127.0.0.1:8080/ in your browser.");
	runApplication();
}


HTTPServerRequestDelegateS redirectNoLastSlash () {
	void callback(scope HTTPServerRequest req, scope HTTPServerResponse res)
	{
		if (req.requestURI.length > 1 && req.requestURI[$-1] == '/') {
			res.redirect(req.requestURI[0..$-1], 301);
			return;
		}
	}

	return &callback;
}

HTTPServerRequestDelegateS serveIndex(string path, HTTPFileServerSettings settings = null)
{
	import vibe.core.path: NativePath;
	import vibe.http.fileserver: sendFile;

  void callback(scope HTTPServerRequest req, scope HTTPServerResponse res)
  {
    sendFile(req, res, NativePath(path), settings);
  }

  return &callback;
}

class WebInterface {

	@method(HTTPMethod.GET) @path("wi-test")
	void hello(HTTPServerRequest req, HTTPServerResponse res)
	{
		res.writeBody("Test page of Vibe WebInterface!");
	}
}