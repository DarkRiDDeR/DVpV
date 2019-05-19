module calculator;

import vibe.http.common;
import vibe.web.rest;

@path("/calc-api/")
interface ICalculator {
  @method(HTTPMethod.GET)
  float add(float a, float b);

  @method(HTTPMethod.GET)
  float subtract(float a, float b);

  @method(HTTPMethod.GET)
  float percent( float a );

  @method(HTTPMethod.GET)
  float divide( float a, float b );

  @method(HTTPMethod.GET)
  float multiply( float a, float b );
}

class Calculator : ICalculator
{
  float add( float a, float b )
  @safe {
    return a+b;
  }
  float subtract( float a, float b )
  @safe {
    return a-b;
  }

  float percent( float a )
  @safe {
    return a/100;
  }
  float divide( float a, float b )
  @safe {
    return a/b;
  }
  float multiply( float a, float b )
  @safe {
    return a*b;
  }
}
