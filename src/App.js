import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="first">
      <Name 
      Title1 = "FREE" 
      price1 ="$0" 
      days ="/month"
      list1 ="✔️Single user"
      list2 ="✔️5GB Storage"
      list3="✔️Unlimited Public Projects"
      list4="✔️Community Access"
      list5="✖️Unlimited Private Projects"
      list6="✖️Dedicated Phone Support"
      list7="✖️Free Subdomain"
      list8="✖️Monthly Status Reports"/>
      
      <Name 
      Title1 = "FREE" 
      price1 ="$9" 
      days ="/month"
      list1 ="✔️5 User"
      list2 ="✔️50GB Storage"
      list3="✔️Unlimited Public Projects"
      list4="✔️Community Access"
      list5="✔️Unlimited Private Projects"
      list6="✔️Dedicated Phone Support"
      list7="✔️Free Subdomain"
      list8="✖️Monthly Status Reports"/>

      <Name 
      Title1 = "FREE" 
      price1 ="$49" 
      days ="/month"
      list1 ="✔️Unlimited Users"
      list2 ="✔️150GB Storage"
      list3="✔️Unlimited Public Projects"
      list4="✔️Community Access"
      list5="✔️Unlimited Private Projects"
      list6="✔️Dedicated Phone Support"
      list7="✔️Unlimited Free Subdomains"
      list8="✔️Monthly Status Reports"
      />

      </div>
      
    </div>
  );
}

function Name(props){
  return(
    <div className="pricetag">
      <h5 className="spacetag">{props.Title1}</h5>
      <h1 className="spacetag">{props.price1}<span>{props.days}</span></h1>
      <hr/>
      <p>{props.list1}</p>
      <p>{props.list2}</p>
      <p>{props.list3}</p>
      <p>{props.list4}</p>
      <p>{props.list5}</p>
      <p>{props.list6}</p>
      <p>{props.list7}</p>
      <p>{props.list8}</p>
      <button>Button</button>

    </div>
  )
}
{
  const data1 = document.getElementsByTagName('p');
  for(var i of data1){
    if(i.innerText.includes('✖️')){
      i.style.opacity ='0.7'
    }
  }
}