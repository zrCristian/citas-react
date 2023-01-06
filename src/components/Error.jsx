function Error( { children } ) {
    return (
        <div className="bg-red-600 text-center text-white p-3 font-bold uppercase mb-5 rounded-md"> 
            {children}
        </div>
    )
}

export default Error
