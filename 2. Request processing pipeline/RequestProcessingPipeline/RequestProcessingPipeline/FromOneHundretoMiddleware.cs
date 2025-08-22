namespace RequestProcessingPipeline
{
    public class FromOneHundretoMiddleware
    {
        private readonly RequestDelegate _next;

        public FromOneHundretoMiddleware(RequestDelegate next)
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

                if (number < 100 || number > 999)
                {
                    await _next.Invoke(context);
                    return; 
                }

                string[] Ones = { "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" };
                string result = Ones[number / 100 - 1] + " hundred";

                if (number % 100 == 0)
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
