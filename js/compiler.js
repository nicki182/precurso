const compile=(text,data={})=>{
    const template=Handlebars.compile(text)
    return template(data)
}