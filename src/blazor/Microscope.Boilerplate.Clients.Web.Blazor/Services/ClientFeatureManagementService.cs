using System.Net.Http.Json;

namespace Microscope.Boilerplate.Clients.Web.Blazor.Services;

public class ClientFeatureManagementService(HttpClient client)
{
    private Dictionary<string, bool> Features { get; set; } = new();

    public async Task LoadFeatureManagement()
    {
        var featuresResult = await client.GetFromJsonAsync<Dictionary<string, bool>>("/api/features");
        if (featuresResult is not null)
        {
            Features = featuresResult;
            Console.WriteLine(featuresResult);
        }
    }
}