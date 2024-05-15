import { useState } from "react";

const LoginPage = () => {
    const [formData, setFormdata]=useState({
        firstname:"",
        lastname:"",
        email:"",
        mobile:"",
        gender:"",
        HTML:false,
        CSS:false,
        Tailwind:false,
        JavaScript:false,
        React:false,
        favcar:"",
        comments:"",  
    });

    function changeHandler(e){
        const{name, value, checked, type} = e.target;
        setFormdata((oldFormData)=>{
            return{
                ...oldFormData,
                [name] : type=="checkbox" ? checked : value,
            }
        });
    }
    
    function submitbtn(e){
        e.preventDefault();
        console.log("Final formdata: ",formData);
    }

    function resetbtn(){
        setFormdata({
            firstname:"",
            lastname:"",
            email:"",
            mobile:"",
            gender:"",
            HTML:false,
            CSS:false,
            Tailwind:false,
            JavaScript:false,
            React:false,
            favcar:"",
            comments:"",  
        });
    }

    return (
    <div className=" w-1/2 flex-col space-y-4 mt-10 border-2 mx-auto">
        <div>
            <label>First name: </label>
            <input type="text" name="firstname" onChange={changeHandler} value={formData.firstname}/>
        </div>
        
        <div>
            <label>Last name: </label>
            <input type="text" name="lastname" className="border-2" onChange={changeHandler} value={formData.lastname}/>
        </div>
        
        <div>
            <label>Email: </label>
            <input type="email" name="email" onChange={changeHandler} value={formData.email}/>
        </div>
        
        <div>
            <label>Mobile: </label>
            <input type="text" name="mobile" onChange={changeHandler} value={formData.mobile}/>
        </div>
        
        {/* radio button */}
        <div className="flex gap-2">
            <p>Select gender : </p>
            <label>
                <input type="radio" name="gender" value="Male" onChange={changeHandler} checked={formData.gender==="Male"} />Male
            </label>
            <label><input type="radio" name="gender" value="Female" onChange={changeHandler} checked={formData.gender==="Female"}/>Female</label>
        </div>
        
        {/* checkbox */}
        <div className="">
            Select skills :
            <br/>
            <label>
                <input type="checkbox" name="HTML" value="Html" checked={formData.HTML} onChange={changeHandler}/>HTML
            </label><br/>
            <label>
                <input type="checkbox" name="CSS" value="CSS" checked={formData.CSS} onChange={changeHandler}/>CSS
            </label><br/>
            <label>
                <input type="checkbox" name="Tailwind" value="Tailwind" checked={formData.Tailwind} onChange={changeHandler}/>Tailwind
            </label><br/>
            <label>
                <input type="checkbox" name="JavaScript" value="JavaScript" checked={formData.JavaScript} onChange={changeHandler}/>JavaScript
            </label><br/>
            <label>
                <input type="checkbox" name="React" value="React" checked={formData.React} onChange={changeHandler}/>React JS
            </label>
        </div>
        
        {/* dropdown menu */}
        <div>
            <label>Fav gaadi</label>
            <select type='Select' name="favcar" onChange={changeHandler} value={formData.favcar}>
                <option value="Bail gaadi">Bail Gaadi</option>
                <option value="Lambo">Lamborghini</option>
                <option value="Audi">Audi</option>
                <option value="McLaren">McLaren</option>
            </select>
        </div>

        <div>
            <label htmlFor="comments">Write some message</label>
            <textarea id="comments" name="comments" placeholder="Enter your comments" value={formData.comments} onChange={changeHandler} className="border-2"/>
        </div>

        <div className="space-x-5">
            <button className="border-2 border-red-400" onClick={submitbtn}>Submit</button>
            <button onClick={resetbtn} className="border-2 border-blue-400">Reset</button>
        </div>
        
    </div>
    )
}

export default LoginPage;