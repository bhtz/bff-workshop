using System.Security.Claims;

namespace Microscope.Boilerplate.Clients.Web.Blazor.Providers;

// Add properties to this class and update the server and client AuthenticationStateProviders
// to expose more information about the authenticated user to the client.
public sealed class UserInfo
{
    public required IEnumerable<SimpleClaim> Claims { get; init; }

    public static UserInfo FromClaimsPrincipal(ClaimsPrincipal principal) =>
        new ()
        {
            Claims = principal.Claims.Select(x => new SimpleClaim(x.Type, x.Value)),
        };
}

public record SimpleClaim(string key, string value);