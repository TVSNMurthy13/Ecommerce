using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DbInitializer
    {
        public static void InitDb(WebApplication app)
        {
            using var scope = app.Services.CreateScope();
            
               
                var context = scope.ServiceProvider.GetRequiredService<StoreContext>() ?? 
                    throw new InvalidOperationException("StoreContext not found");
                
                SeedData(context);
            
        }

        private static void SeedData(StoreContext context)
        {
            context.Database.Migrate();

            if(context.Products.Any()) return;

            var products = new List<Product>
            {
                new() {
                    Name = "Angular Speedster Board 2000",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.",
                    Price = 20000,
                    PictureUrl = "/images/products/sb-ang1.png",
                    Brand = "Angular",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new() {
                    Name = "Green Angular Board 3000",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.",
                    Price = 15000,
                    PictureUrl = "/images/products/sb-ang2.png",
                    Brand = "Angular",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new() {
                    Name = "Core Blue Hat",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.",
                    Price = 800,
                    PictureUrl = "/images/products/hat-core1.png",
                    Brand = "Core",
                    Type = "Hats",
                    QuantityInStock = 100
                }
            };
            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}