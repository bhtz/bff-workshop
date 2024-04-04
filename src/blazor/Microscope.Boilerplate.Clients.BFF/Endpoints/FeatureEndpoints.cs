using Microscope.Boilerplate.Clients.Web.Blazor.Services;

namespace Microscope.Boilerplate.Clients.BFF.Endpoints;

public static class FeatureManagementEndpoints
{
    public static void MapFeatureManagementEndpoints(this WebApplication app)
    {
        app.MapGet("/api/features", async (IFeatureManagementService featureManagementService) => 
            await featureManagementService.GetFeatureManagement());
    }
}