using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;

namespace Microscope.Boilerplate.Clients.BFF.Endpoints;

public static class AuthenticationEndpoints
{
    public static void MapAuthenticationEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("auth");
        
        group.MapGet("/login", (string? returnUrl) =>
        {
            var url = string.IsNullOrEmpty(returnUrl) ? "/" : returnUrl;
            return TypedResults.Challenge(new AuthenticationProperties() { RedirectUri = url },
                [CookieAuthenticationDefaults.AuthenticationScheme, OpenIdConnectDefaults.AuthenticationScheme]);
        }).AllowAnonymous();

        group.MapGet("/logout", (IHttpContextAccessor httpContextAccessor) => Task.FromResult(TypedResults.SignOut(new AuthenticationProperties() { RedirectUri = "/" },
            [CookieAuthenticationDefaults.AuthenticationScheme, OpenIdConnectDefaults.AuthenticationScheme]))).RequireAuthorization();
    }
}