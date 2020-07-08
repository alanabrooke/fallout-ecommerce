import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {getProducts} from '../redux/productReducer'
import {connect} from 'react-redux'
import './styles/Products.css'

class Products extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    add = prod_id => {
        this.props.addToCart(prod_id)
    }

    render() {
        const mappedProducts = this.props.products.map((val, i) => {
        return(
            <div key={i}>
    
                <h3>{val.prod_name}</h3>
                <p>{val.prod_desc}</p>
                <p>{val.prod_price}</p>
            </div>
        )
    })
    return (
        <div>
        <Link to='/'>Login/register</Link>
        <Link to='/CustomerAccount'><button> Customer Account</button></Link>
        <Link to='/VendorEdit'><button> Vendor Account</button></Link>
        <br/>
        <button>Armor/Clothing</button>
        <button>Weapons</button>
        <button>Aid</button>
        <button>Bobbleheads</button>
        <button>Misc Items</button>
        <h1>All Products</h1>
        <div class='products'>
            <figure>        
          <img class='guns' src='https://gamepedia.cursecdn.com/fallout_gamepedia/thumb/a/a1/Chinese_assault_rifle.png/1200px-Chinese_assault_rifle.png' />
          <figcaption>
              Chinese Assault Rifle
          </figcaption>
            </figure>
            <figure>
          <img src='https://vignette.wikia.nocookie.net/fallout/images/2/29/Fo4_Grognak_the_Barbarian_collage.png/revision/latest/scale-to-width-down/242?cb=20170105002706'/> 
          <figcaption>
              Grognak the Barbarian
          </figcaption>
            </figure>
            <figure>
          <img src='https://vignette.wikia.nocookie.net/fallout/images/f/ff/BH-Medicine.png/revision/latest/scale-to-width-down/242?cb=20160102002011' />
          <figcaption>
              Medicine Bobblehead
          </figcaption>
            </figure>
            <figure> 
          <img src='https://vignette.wikia.nocookie.net/fallout/images/6/64/Hockey_Mask.png/revision/latest/scale-to-width-down/242?cb=20110405225652'/>
          <figcaption>
              Hockey Mask
          </figcaption>
            </figure>
            <figure>
          <img class='nuke' src='https://gamepedia.cursecdn.com/fallout_gamepedia/thumb/7/79/AmmoFatManFO4.png/1200px-AmmoFatManFO4.png' />
          <figcaption>
              Mini nuke
              </figcaption>
            </figure>
            <figure>
          <img class='guns' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFRUWGBgVGBUWGRsXGhgYGBgXFyIXHxUbHyggGRsmGxUWITEiJSkrLi4uFx8zODYtNygtLisBCgoKDg0OFxAQGi0dHR4tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAHsBmgMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xABNEAABAwIDAwcIBAwEBAcAAAABAAIDBBEFEiETMUEGByIyUWHRFBVTVHGBkZMjUpKhFhckQmKCscHS0+HwM2NywkNEovElNGRlo+Lj/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAEDAv/EAB8RAQEBAAICAgMAAAAAAAAAAAARAQIDEjIhMRNBYf/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBEUTxjnCo6aaSCTaZ47B2VoI1DTob69YIJYi1vJ/G4qyETQ5shJb0hY3bpuWyQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFVjue2muR5JUmxI/4fA2+urTXyIMXaGvbsm3u8Ztb7zrvQXC3nkdI4CKjAY4Xa58hzAdpY1tvcHe9Rt3PRX20jpvsPP3Z1A8KrSBG0b8uXXv9y14dwGpVRZreeiv4xUx/UeP967Sc9dbwhpx7nn/cq2EY4m/cN3x3n3WXcuy6N07bf3qqLJZz0V3Gmh9+Zv7T4qJ4pj5qZpJpI42vkdmcA57uwWGgHAcVHiUzqCecnecWaiiMMDIyzMX2exzjchoNjtBYdHdbiV6Yty/xGpLXNmMIDerD0B7STck/323r/aLc4bi+yYAWtde2/wB3gqNqeVOJ+u1H2/6LseVGJ+u1H2/6LAPKEXadmzT++1DyhGn0bNLcOy/f3oNgOU2J6fltRx/P9nd3q6+bSrllw+J80jpJCZLuebk2e4DXssAqCmx7NY5GbnD3kM1+5XpzS1W0w6M2As57dO529QTJERRRERAREQEREBERAREQEREBERAREQEREBERAREQEREBRXnB5Vvw6KOYRCRr5NkRchwcWueD2WtG6/uUqUW5yeT5raF7GC8sZE0Q7XsDhl9rmue0d7geCmrn2g7eeeT1L/qK4bz0P40rW9hcXa/AFVnDPp3jS3ELNhaHNAIBWX5dxr+PFjU/PGSQHUrTe1srzrf9VSup5w6eKcU8sM7ZbsDhaNzWucAbFwfra9rhUZS0gbI0AjKSHDXcQRcX1sLX+Ck2NVsMuJPqYzaPMH2Ngbhupy335gSts3y43GW8ZymrQ/GDTWvs5/ss/jUiwzEI542yxm7T8QewjgQqGNbGNztP771nYRyklp35opAAdCCRY+0FY8d7L8415ceufGr2RVfDzqPA6cEbj2tkLR8CHftXoOdj/wBKPm//AEWt/jKLMRVNi3OhJJGWQtEDzb6TMJLDiMjmga9vBemBc6BjY1lU0zEXvK0ta4i+g2YAboLC99bJSLVUWPNzhXqEPwPitQ/nYpeEMxPfswPjnKjPKjnVlfGRE0U7DoXh2aQ34NNgGE9utt9xvXUR7cquTeA08jwGSbYa7OB7iIzwJDnCNutjlJ9yq+ooqYdGOoBAAuAA5xOgzHIXcTuvYXW8pOS5eNrWvysNy2NtyM2+zu08b8bEjes6mqqSJxDImtGXgBwczwuuo5qHQ0UTjZs4cewWB+BK7vwpoNi91/YpY+ChqLtfEGm5JeBYj38PctNi+GyUoDpHmSBxGR5vna07iTxB0032ueASYVM8J5mWzwRzNryBIxrwNiDbMAbE7TW273LK/EV/7gfkf/qophvO1VUUbaZkUeWO4GYlxIJzXzXGnS07iOxe1Xz11sjC0MYy/wCczQ27id3t3rlWLy45DwUGVgxBssxcM0RjLcrSD0i5pdY7uiRcg34LjC+Qgrmxtoa2F0gZeWOcPicHcSyzXbRguBfS1tesAIvU48H3L4A4uNy4ucST23ve64p+UTo3NdHCGFurS1z2kHtzB11fgTr8SGI+npPty/ylz+JDEfT0n25f5SwoOevEmNDckLrcXgk+8ghe558sQ9BT/B/8SivccyOI+npOP58vd/ldytjm25OzUFEKed0bnh73XjJLbONwLuaD9yqWDnmxN5GWGnPb0Htt3XL9eCzjztYnY/k9Nf8AX8UgvVaXlTylgoYhJMeto1o3uI3+4XGveOJAUKPLSotfzpho3XBgnNv+tRrFeUMtTiVEDU0kgbZ8cwa5sTZCXkB0TnZyczIrEaat7CkKnlLzgEOZ5TRz07JDZj5GObcgE26QGtgTY2NmmwKm4KrznElm82NEz4XvdIHGSJrg20d5Bk6WhIZlJuRqe1c8gsbm82SuJDnQl2QvzO0cc4DulcgB1ha2gAUFhoql5msQqdtLDPPJOHNLs0rnvIMZaLNLnEAHaXI9iwabG6sY3tDO4se9jNheTZNa7Zw3DM9geN7dYqwXQiqHnTxOqFdA2Kd8TInDoRl7dpfZPs8NeA7iALbiVu+cbFah2GROik2L5mRvc+Mva5v+G8hjmuBaDcg3J0ukFhoq75LY1UHB3uc/NLGWwiR+ckhwi6biXZi76U2N+AWBzK4lUHawzzPmHSkD5S9zwRsm5Q5zj0db27SkFpoqW5M43V+eC987nsmLWmEmQxMEjojdrC8hpG4H9I9qyecDFqnznEI6h8TIZGNDI3PDX6RSfSMDwHglxad2iRKuBFWHO3ic5p6dsUr4S4CZzonOY4nLlyZmuBydMm3a1uvbn1OJz+ZCdodpl8n2ozB9hePaXzX2lhe99+tuCRasBFXXNHiM7qeSOaV0uQbQPkLnP6Tnixe5xzDoC2611oeQOMVRxKQvnfIyc3Mby9zGZzntG0vtHlvlGh00SJVxoseSuiaSHSsBG8FwBHuuuvnGH00f22+KispFi+cofTR/bb4ocSh9NH9tvigykWL5xh9NH9tvigxKH00f22+KDKRcA31C5QEREBERBWXO1yKjfE+up2ZZ4+nKG7pYx1nFv12jpZt5DSDfS1V0RaRcC/avpyqbdjh2tI+5fLeESDZt63VGg9iw7sb9O1sNoA9mmlzv9m5YU8r2vd9HLx/4buIPd3r2gbmqIm2tdwFib+5Z76vM+UkDWIAHXe1jLkdruifiVr0+rju9mmjdId0Mp9kbj+5d5HSN0dDMD2GNwPwIWKMWAJzHS9rC1737yL9tl7nEmnfn+AP+5asXLpXAXdHI0drmOA+JC9Myx3V4fFJoRo3fprnbp9y4bODbUfFB7uXGZeO2H1vvXU1DbdYfFFZAdpwWTg1Dt6prXjNHCNo8aaudqBrvs0Ae9ax9QLEX3qR8j5Y9rUNy3eQ3WzuqWt4hwH3IPbH8Sc+7QbNFhrpYfVtxAsSOy2m9R2TEGN0EIcDxeHOv7gco/vUrO5UWaBlBa0uIO/raHi48AePatNNUPMUbGvLcuckbTIDd7jfUEcRb2pupmNhHXh1rMDXXuAbkO7rON7++x7FJ6So8oY6GWzg8dHMbi5Fw4k7yR4cFAppDmbqTZoFyb/nvtY93SUswAWDC5upF29bqlziNzwNx7Ew1FKobONzHtBdE/ZHvb1m6+y4XWgdE6NznRAuDmtAzOGhD7nQ9oavbGXtfJUhthd0YO/eC48SeAHxWshic0EaWNjvtuv4qKypKmMG2xB0v1n/xdy6OrmegH2neK8y08Qw95sT+xcCM/VZ93goO/lrfRD4u/iXZtY30I+07+JcBv+Wz4j+FcuafqM9xHgqPVteL6R27g537brIbX8co46Fzjx9vd96wNmfqs+I8Fy2Bx0u0cND+5BnVsgBeBuBIHxWO99wzuYR9xXEg01SOMkNABJLSAALkk3sABvO7RBvm4i0RuAJP5OA1oNhm14btdy3eE4jJsGFr3xsAbtmh9g7KyxaRfXtUDmw2rgjE08E0cb/o2PkYWAuAJsL67gfgV60GCVFRFJVxwh0NNrLISwW03WJzONrHQFSqm9FiefoUcskDwZDnz5SWkRjeOBLW6dy487RGRzWOeJiGt2ubQSNew3Dt9wWXuoNgOC1OIPNPTMEkga6TpOa2zQWtPSce1zdF4sie6byZrQXueIAzS2cuDLX3Dp21SpFh1OKtjezyqR80rX5s+bN0bixJOugaB26LpJiDmxflM8ksRFoo85OWxJDQNw6IaOzoqBYxh09DL5POwMlZZzmtIIIdZwuW6HQrIr+TtTSQxVM0bWRVIa6Fwc0khwEg0Bu3ouG/2JSJzBiTiNoyaRlMMmeLPYOLWNbctHEWZr+iO5eVHXueA2hlkgcHPLnZ8pLS0ADTgSxp/VUJpcDqJad+INjaaeBwjkeS2+boAdEnM7/EZrb9i68n8AqcSeYaZgfIxpkOZwbZtw3rOPa4aJSJzHicbnuZAXtmc0NbJmtle0tOh7QWX9yVGIMjkYKt8kkocXOkJDrghuUl17mwbb2BV7RsfUSMp4mgvlIjY02AzOygb9BrxXfFaKWimdTTtDZIyM7WkEdJrX726HouCtIn+IVb2M/LJZZmuymIZ8+UDe0XOgsf2L0fXvs6TbyeR3daAO07L5L2vmPxUExrk9U0GzNRG1m3G0jLXNddmn1Tp1hoV2fydqfJfOWzb5MTkz5m5s2bJfLfNfMDqpSJvhlY9+TyOeSANadr08hd0nEA2Oote3tK11bisBhnyZw/I3pbhuANrHtUawDkzVYjn8mja8wgOkLntbo7NYXcdeq5a+j2kxEMLHPe8ZWxtFyTvsB7AVaRMpBTCJsskrQcjC4WJPVA4DevOSigdkeypY1u9wyXzg2Nrnq/1UXmwiuaS11LUAjokGF/DS1rLr5trfVqj5T/AASkStraQvcwSjM0a9E6XHbuO9IYaaGO887X2Orgy17mw6LVFPNtb6tP8p/ggw6tH/LT/Kf/AApSJo+hpy9rm1LAwXzR5L5uzpcP6L3pmUL3OY2dl2ENPRI399tRvUD82Vvq1R8p/gufN1b6tP8AKf4J5EWN5VHHI98c5a4PflykjL9JlvfuaLqe83eKvlqHMdWOqBs3usSSBZ0QBsQPrHXvVJUPI7FpnNy0c42m5z2FjbHW5c61hx1Vrc0HIWuoKqWWrDAx0JYMrw45s7Hbh3NKbpFtIiLlRERBwQvljB4iWNuB1Rv1X1QvmKljyh2vVuPgVj3fWN+n9sNotK3XXU/AE/uWHUVEYe5wffdYXuAejfT3FejnfSNPefhYqbVPMxiJe8tlow0ucWjaSiwJJAsIdNFp1+rPs9kKbjAzXuNxG7tFl4Q1mmrhvPEcSpx+JjE/S0fzZf5K5/ExiXpaP5kv8laVnEKdMyxzO0Nh0CC7rC5Db6m2tr/BYtS+UnWokdwuGEftAVgDmZxL0lH82X+SsTGOa/EaeJ0zhDK1gJc2CR7nhoBJdlexua1twJPYClEFbLIN00g/UPguX1kvp5fsHwXBkfezdRYEHNvB93bce5eE872mzrjS/W4fDuUuLNewmdxnk+wfBZ+F4jspY5cxIsInkgjUbnWPaDv7lt4ubfGHsbIylJa9ocLzRNNnAEXa5wINjuK9Gc2mM/nUJcDoQZ4Dp8zerUbKupGSxODnHK8AtI1ykah5032uABvv2b4vU0myLGFzX2B1buPSJGh3HdouseITwOIdd7QSNLOII33IJDj3i43cF6y1Ymcx7dL6e8Hf/fYiRzSYYJMj3va2MaEalzjmcbZR1W6i7j3re4tVCIPkJsNze4W0bppoBbTeo/Hi7YmBuXM46iwud5109i1lbiLnf4p72xb7cRm7r62/qlWM7BpTHd5yZ5Lm0myIFy212y6dUHUa3t3rPfiguNIt4vlbFe19eFibXtdRN1UTqXON9d667c/WPxU818Ux86aC4p/sweC6uxXdpT8R1KZvE/VFyLW1PG6h5n/SKbf9JyeZ4pZHio4CLeLXbCRxvfMP9NvevQYpY6CE779GnPA7swy77e5Q/a95XQyH6xTzPFMH4pcaiC/c2Ea2/RGgXpDiQ1AbDYkauZBmtpvPx3KG53WvmPxWVTzi2rvvVzlU3GTK1xvYfsWx5MyiOppZHkNbHNE9532a2UOJsNT0RfRai7O5egy9gQXBzxYzRV9DaCrBkheJms2b/pNCwtzOADdHk316tuK1/IKlpGYRUUs1a2OSsuSNm52y/MG42fdrQ7eOtbgqskDSPasaeI5m5XAAd/f9+ikVZvM1SxUVRJU1dQ2I7Mxtjyl2bOWuLs7SQMuzAtbXN3LT4dgcIxv/AM2NhHK2rE+zPSGYS5NnmuOmCy/de2qhlTciwcAfbb713jGl8wzWy392/wCKIsHnVwqKrr21UFS17Jg0SdAjYhgYy+pBkuMzrADq24rY850tHLhVNDDWCSShZG0N2T27UNayIm7tGWALrXO6yrKka5rCHuDjftvp2XXiyA5jneC1x7e/s4aILT5PU1GzA56GSuDJalwmP0Lzs3DZEM0NnX2I6Vx1u7Xx5l2U9DLLU1VSGOcwwiLI512kxv2mdtxva5uW3C91WkrTmYQ8AAC4v+7jou1U0ubZjgDfttffxSCS8ksJp4MWbtKwCGle2Zs2yd9Llc0hmzBuy4zam9rbtVnc5WHU9XiRngqw6Ocx7R2zcNiAGRE2JBf0Wl2gHYoSRp1hmIsT32bY/G65pAQLOOY33jX3XSCyeeOalqaelkp6oSOp27FzMjm3aW/4l3Wt0mNGXXr9yzHspDyfFAKwOmy7cDZPF5M212PYOkcma9uPcqojgcC4SO6Jtx79/cuXMcXNc13RsLtv8dON0Fr8zz6WgjqHVFWGyTgM2ezccgZns7O24N8+7S1lHua/A4m4yAakWp5DsjsydvcuY3cfo7sIfre17KG1UbnN6JsQfZ96lPNaAMTpruGYvAPeQP8Aufcg+nURFFEREBERAREQEREBERAXzzj/ACarYKiaMUk8jC9zmPiifK1zHOJb0mNNjbQg6j2WJ+hkXPLjnJ1x5eL5aZglW17XSUdS1lzmc+CVoAII1JaAN9vevqVEVzJkTlt0REVQRFH+XeNCkoZpb2flLI+97tB7bau/VKD5laxomIj6oBDf9OY2+5dsVp2lmYEBzQWkHTM3U3v2i59o9ll4UzgA6Q+wewKzeZLkg2oe7EKluYRPy07HdXOAHGWx6xGYAHgQeIFuPvlcd/XGatrkji8dVRwTRlpDo2Zg0h2R+UXYSOIOiwOcXGjS0UhYbSSDZs7Rm3u010bf327VjYpyKLJXVWGSCkqTq9lr08/G0sQ3Hf026i5OpWlw2ebEq+MVEQjFIM0jGuzt2jXECzx9Z7Q4D6sRBWmM0h5Hck4qfD2U00THl30kzXNDgZH6m4tY5RZoPYwKpecrBoabEGRU7MkezD8tyQC5zr2zE2Gm7d2L6DVB88dW04mcr23jiYw67nXc7LpfXK4fFMVIeaDkxSVFG+WogZK8SujBfcjKGsIGUm29ztbX1U2/ADC/UKb5YUe5jJW+QysDmktncSAbkNcyOxI32NnD9U9isZQRr8AML9QpvlhPwAwv1Cm+WFJUQRr8AML9QpvlhPwAwv1Cm+WFJUQRr8AML9QpvlhPwAwv1Cm+WFJUQVXUcy8Da6Kpp5tnEyWOV1M5m0ByPDi1ri4WaQLWINvZoLH8z0/q8Py2+CzUQYXmen9Xh+W3wTzPT+rw/Lb4LNRBheZ6f1eH5bfBPM9P6vD8tvgs1EGF5np/V4flt8E8z0/q8Py2+CzUQYXmin9Xh+W3wTzRT+gi+W3wWaiDC800/oIvlt8E800/oIvlt8FmogwvNFP6CL5bfBPNFP6CL5bfBZqIMLzRT+gi+W3wTzRT+gi+W3wWaiDC80U/oIvlt8F2iwyFpDmwxgjUEMaCPeAstEBERAREQEREBERAREQEREBERAREQEREBfPnPZylNRWeSRn6ODom3GQ9Y+7RvtBX0GvlnFuT87aiTbR1TZQ9+bJTOkaSXOOZry5uZp7QLcUGpmYOiy2gN/gPFfRHM+3/AMLhNrXfMf8A5nj9yoYYS82JFbcX/wCSJ00/zQrTwHnE8lp4qZuG1jhFG1mcsLS9wFi7KAQLm53nenHJi8tup/yyxoUlJJNezrZWf6yDY99hd1v0Vhc3mEmCka94tLP9K++8AgZWH2MtcdpcoqayXGqmnaaSeGlhdtJjM3KHEahgv18xDQQNQLnirSVci+UuU0UkdbUtnzbQTSXLhqbvJDvY4EOB3EOFl9WrT43yXo6sh1TTRyOAyh5FnhupsHizgLk8eJTNVUXMJBIa2eRo+ibCWP8A9b3scz32ZIe4HvCvVYuG4dDTxiKCJkUbdzGNDR7bDeTxO8rKUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z' />
          <figcaption>
              Gauss Rifle
          </figcaption>
            </figure>
          {/* <img src='' /> */}
        
        </div>
        {/* {mappedProducts} */}

        </div>
    )
}}
const mapStateToProps = state => {
    return {
        products: state.productReducer.products
    }
    }
    
    export default withRouter(connect(mapStateToProps, {
    getProducts
    })(Products));