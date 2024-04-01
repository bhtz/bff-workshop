using Microscope.Boilerplate.Clients.Web.Blazor.Configurations;
using Microscope.Boilerplate.Clients.Web.Blazor.Providers;
using Microscope.Boilerplate.Clients.Web.Blazor.Services;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

var baseAddress = builder.HostEnvironment.BaseAddress;

builder.Services.AddScoped<HostingEnvironmentService>();
builder.Services.AddScoped<ClientAuthenticationHeaderHandler>();
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(baseAddress) });
// builder.Services.AddBFFClient().ConfigureHttpClient(client => client.BaseAddress = new Uri(baseAddress));
builder.Services.AddBFFClient().ConfigureHttpClient(
    client => client.BaseAddress = new Uri(baseAddress + "graphql"),
    clientBuilder => clientBuilder.AddHttpMessageHandler<ClientAuthenticationHeaderHandler>());

builder.Services.AddUiConfiguration();
builder.Services.AddAuthorizationCore();
builder.Services.AddCascadingAuthenticationState();
builder.Services.AddSingleton<AuthenticationStateProvider, PersistentAuthenticationStateProvider>();

await builder.Build().RunAsync();
