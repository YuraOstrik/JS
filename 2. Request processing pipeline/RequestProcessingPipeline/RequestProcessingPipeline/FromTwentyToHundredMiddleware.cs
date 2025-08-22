namespace RequestProcessingPipeline
{
    public class FromTwentyToHundredMiddleware
    {
        private readonly RequestDelegate _next;

        public FromTwentyToHundredMiddleware(RequestDelegate next)
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
                if (number < 20)
                {
                    await _next.Invoke(context); //Контекст запроса передаем следующему компоненту
                    return;
                }
                else if(number > 99)
                {
                    await _next.Invoke(context);
                    return;
                }
                else
                {
                    string[] Tens = { "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" };
                    if (number % 10 == 0)
                    {
                        // Выдаем окончательный ответ клиенту
                        await context.Response.WriteAsync("Your number is " + Tens[number / 10 - 2]);
                    }
                    else 
                    {
                        await _next.Invoke(context); // Контекст запроса передаем следующему компоненту
                        string? result = string.Empty;
                        string? fullres = string.Empty;

                        result = context.Session.GetString("number");
                        fullres = Tens[number / 10 - 2] + " " + result;

                        context.Session.SetString("number", fullres);
                        await context.Response.WriteAsync("Your number is " + fullres);
                    }
                }              
            }
            catch (Exception)
            {
                // Выдаем окончательный ответ клиенту
                await context.Response.WriteAsync("Incorrect parameter");
            }
        }
    }
}
