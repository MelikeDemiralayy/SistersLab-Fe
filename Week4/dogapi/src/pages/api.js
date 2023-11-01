export async function fetchCatImage() {
    const apiKey = process.env.NEXT_PUBLIC_CAT_API_KEY //.env dosyasından bir şey alırken bu şekilde yazmamız gereklidir.
    const response = await fetch ("https://api.thecatapi.com/v1/images/search",{
        method:"GET",
        headers:{
            "x-api-key": apiKey
        },
    });
    const data = await response.json();
return data[0].url; //apiden çektiğimiz datamızın içinde ne gibi özellikler varsa array şeklinde almamız için 
};