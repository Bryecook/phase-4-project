Cocktail.destroy_all
User.destroy_all

require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://the-cocktail-db.p.rapidapi.com/popular.php")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["x-rapidapi-key"] = '5848b50c0emshe41319d248e6cb3p1a9315jsn056ef98129a8'
request["x-rapidapi-host"] = 'the-cocktail-db.p.rapidapi.com'

response = http.request(request)
t = response.read_body

ruby = JSON.parse(t)
array = ruby["drinks"]

array.each do |cocktail|
    i = 1
    x = ""
    ingredient_array = []
    loop do
        x = cocktail["strIngredient#{i}"]
        i+=1
        if x == nil
            break
        else ingredient_array << x
        end
    end
    Cocktail.create(name: cocktail["strDrink"], ingredients: ingredient_array, instructions: cocktail["strInstructions"], glass: cocktail["strGlass"], picture: cocktail["strDrinkThumb"])
end

User.create(name: "Jose", age: "26", hometown: "Chicago", picture: "", password_digest: "react")
User.create(name: "Brian", age: "25", hometown: "Birmingham", picture: "", password_digest: "rails")