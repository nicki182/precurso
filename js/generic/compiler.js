const compile=(text,data={})=>{
  const compiled= _.template(text)
    return compiled(data)
}