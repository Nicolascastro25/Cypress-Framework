export default class Page {
    clickElement(element, forceOption) {
      forceOption ? element.click({ force: true }) : element.click();
    }
  
    typeInElement(element, text) {
      element.type(text);
    }
  
    selectFromDropwdown(element, option) {
      element.select(option);
    }
  
    uploadFile(element, fileName, forceOption) {
      forceOption ? element.selectFile(fileName, { force: true }) : element.selectFile(fileName);
    }
  
    dblClickElement(element, forceOption) {
      forceOption ? element.dblclick({ force: true }) : element.dblclick();
    }
  
    check(element, forceOption) {
      forceOption ? element.check({ force: true }) : element.check();
    }
  }
  