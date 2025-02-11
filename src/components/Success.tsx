const Success:React.FC=()=>{
    const accept = "public/assets/cHbD-togepi-and-pikachu.gif";
return(
    <>
    <div className="min-h-screen bg-gradient-to-b from-white to-red-200">
    <div className="mx-[500px] mt-[150px]  ">
      <div className="w-[500px] h-[350px]   " >
            <img src={accept} alt="pikach" className="h-[350px] object-cover "/>
        </div>
        <div className="mt-[30px]  text-xl font-semibold text-[#130505]  px-6 py-4  ml-6 ">
        Thanks for being my Valentine! ⸜(｡˃ ᵕ ˂ )⸝❤️
        </div>
    </div>
    </div>
    
    </>
)
}
export default Success