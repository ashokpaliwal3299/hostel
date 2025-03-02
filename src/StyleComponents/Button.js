
export function Button(props){
    return <div>
        < button onClick={()=>props.onClick} style={{fontSize:"18px" ,borderRadius:"10px", color:`${props.color}`,backgroundColor:`${props.backgroundColor}`}} >
            {props.name}
        </button>
    </div>
}