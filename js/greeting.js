var myDate = new Date();
if ( myDate.getHours() < 12 ) 
{
document.write("Good Morning! Friend");
}
else  
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
{
document.write("Good Afternoon! Friend");
}
else  
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 )
{
document.write("Good Evening! Friend");
}