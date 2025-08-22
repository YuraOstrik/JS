namespace RequestProcessingPipeline
{
    public static class ThouthendsExtention
    {
        public static IApplicationBuilder UseThouthends(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ThouthendsMiddleware>();
        }
    }
}
