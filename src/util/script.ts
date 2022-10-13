export const alert = (data:string) :string =>{
    return `<script>alert('${data}')</script>`;
}
export const window = (data:string) : string =>{
    return `<script>window.location='${data}'</script>`;
}