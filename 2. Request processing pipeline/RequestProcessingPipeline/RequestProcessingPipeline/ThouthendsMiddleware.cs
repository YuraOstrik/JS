namespace RequestProcessingPipeline
{
    public class ThouthendsMiddleware
    {
        private readonly RequestDelegate _next;

        public ThouthendsMiddleware(RequestDelegate next)
        {
            this._next = next;
        }
        public async Task Invoke(HttpContext context)
        {
            string? token = context.Request.Query["number"];
            try
            {
                int number = Convert.ToInt32(token);
                number = Math.Abs(number);

                if (number < 1000)
                {
                    await _next.Invoke(context);

                }
                else if(number > 9999)
                {
                    context.Response.WriteAsync("Unavailable");
                }

                string[] Ones = { "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
                int remainder = number % 10;

                string result = Ones[number / 1000 - 1] + " thouthend";

                if (number % 1000 == 0)
                {
                    await context.Response.WriteAsync("Your number is " + result);
                }
                else
                {
                    await _next.Invoke(context);

                    string? res = context.Session.GetString("number");
                    await context.Response.WriteAsync("Your number is " + result + " " + res);
                }
            }
            catch (Exception)
            {
                await context.Response.WriteAsync("Oups");
            }
        }
    }
}
