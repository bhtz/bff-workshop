using System.Net.Http.Json;

namespace Microscope.Boilerplate.Clients.Web.Blazor.Services;

public class ClientFeatureManagementService(HttpClient client) : IFeatureManagementService
{
    public async Task<Dictionary<string, bool>?> GetFeatureManagement()
    {
        return await client.GetFromJsonAsync<Dictionary<string, bool>>("/api/features");
    }
}