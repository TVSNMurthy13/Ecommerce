using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// configure CORS for development clients
builder.Services.AddCors(options =>
{
    options.AddPolicy("DevCors", policy =>
    {
        policy
            .AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("http://localhost:5173","https://localhost:5174")
            .AllowAnyOrigin();
    });
});

var app = builder.Build();
app.UseRouting();

app.UseCors("DevCors");

app.MapControllers();
DbInitializer.InitDb(app);

app.Run();
