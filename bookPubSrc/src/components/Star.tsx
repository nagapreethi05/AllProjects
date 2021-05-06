import react,{useEffect,useState} from 'react';
import {FaStar, FaStarHalf } from 'react-icons/fa'
interface Iprops{
    value:number
}
const Star:react.FC<Iprops>=(props)=>{
    const[dec,setDec]=useState(0);
    useEffect(()=>{
        setDec(dec=>dec+(props.value*10)-(10*Math.floor(props.value)));//if 4.6then =46-40=6
    },[])
    const halfStar=()=>{
        return(//title is for hover display rating
            <FaStarHalf style={{marginLeft:"7px"}} color="gold" title={`${props.value}/5`}></FaStarHalf>
        )
    }
    return(
        <div>
            <h4><strong>Rating:</strong>
                {[...Array(5)].map((star,index)=>{//...is spread operator empty array of size 5
                    if(index<Math.floor(props.value)){//i<mat(0<1=>true prints one star and so on(exits at 4 <4))
                        return <FaStar style={{marginLeft:"5px"}} color="gold" title={`${props.value}/5`}></FaStar>
                    }
                })}
                {/* if decimal val is >=5 then prints halfstar else ignore */}
                {(dec>=5)?halfStar():null}
            </h4>
        </div>
    )
}
export default Star