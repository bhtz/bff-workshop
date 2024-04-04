using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Localization;

namespace Microscope.Boilerplate.Clients.BFF.Endpoints;

public static class CultureEndpoints
{
    public static void MapCultureEndpoints(this WebApplication app)
    {
        app.MapGet("/culture", (HttpContext context, string? culture, string? redirectUri) =>
        {
            if (culture != null)
            {
                var requestCulture = new RequestCulture(culture, culture);
                var cookieName = CookieRequestCultureProvider.DefaultCookieName;
                var cookieValue = CookieRequestCultureProvider.MakeCookieValue(requestCulture);

                context.Response.Cookies.Append(cookieName, cookieValue);
            }

            return Results.Redirect(redirectUri ?? "/");
        });
        
        // return await _featureManager.GetFeatureNamesAsync()
        //     .ToDictionaryAsync(
        //         feature => feature, 
        //         feature => _featureManager.IsEnabledAsync(feature).GetAwaiter().GetResult());
    }
}