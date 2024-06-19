class domHandler {
    constructor(parentElementId){
        this.rootElement = document.getElementById(parentElementId)
    }

    writePersonListInHtml(personObjectList){
        personObjectList.map((person,index) => {
            this.rootElement.appendChild(person.returnInfoAsHtmlCard())
        })
    }
}