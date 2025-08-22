namespace RequestProcessingPipeline
{
    public static class FromOneHundretoExtention
    {
        public static IApplicationBuilder UseFromOneHundreto(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<FromOneHundretoMiddleware>();
        }
    }
}
