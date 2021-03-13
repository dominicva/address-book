export default class CreateContactModal {
  constructor(hookId, tag, cssClasses) {
    this.hookId = hookId;
    this.tag = tag;
    this.cssClasses = cssClasses;

    this.htmlContent = `
    <form class="add-contact__form">
      <label class="test" for="fname">first name</label>
      <input type="text" name="fname" id="fname" />

      <label for="lname">last name</label>
      <input type="text" name="lname" id="lname" />

      <label for="number">number</label>
      <input type="tel" name="number" id="number" pattern="^[+]*\d+" />

      <label for="address">address</label>
      <input type="text" name="address" id="address" />
      <button class="add-contact__submit-btn" type="submit">
        Create contact
      </button>
    </form>
`;
  }

  render() {
    const element = document.createElement(this.tag);
    element.innerHTML = this.htmlContent;
    element.className = this.cssClasses;
    this.hookId.append(element);
  }
}
