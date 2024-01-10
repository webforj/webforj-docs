---
sidebar_position: 5
title: PasswordField
slug: passwordfield
---

import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';

<DocChip tooltipText="This component will render with a shadow DOM, an API built into the browser that facilitates encapsulation." label="Shadow" component="a" href="../../glossary#shadow-dom" target="_blank" clickable={true} iconName="shadow" />

<DocChip tooltipText="The name of the web component that will render in the DOM." label="bbj-editbox" href="https://basishub.github.io/basis-next/#/web-components/bbj-editbox" clickable={false} iconName='code'/>

<JavadocLink type="engine" location="org/dwcj/component/field/PasswordField" top='true'/>

:::success **Important**
The `PasswordField` class is a Field component, and as such shares all of the commonalities belonging to a Field. Please refer to the **[Field documentation page](/docs/components/fields)** for an overview of Field properties, events, and other important information.
:::

The `PasswordField` component provides a way for the user to securely enter a password. The element is presented as a one-line plain text editor control in which the text is obscured so that it cannot be read, usually by replacing each character with a symbol such as the asterisk ("*") or a dot ("•"). This character will vary depending on the user agent and operating system.

<ComponentDemo 
path='https://hot.bbx.kitchen/webapp/controlsamples?class=componentdemos.fielddemos.PasswordFieldDemo' 
javaE='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/java/componentdemos/fielddemos/PasswordFieldDemo.java'
javaC=''
cssURL='https://raw.githubusercontent.com/DwcJava/ControlSamples/main/src/main/resources/css/fieldstyles/date_field_styles.css'
/>

### Usages

The `PasswordField` is best used in scenarios where capturing or handling sensitive information, such as passwords or other confidential data, is essential to the user interface or application functionality. Here are some examples of when to use the `PasswordField`:

1. **User Authentication and Registration**: Password fields are crucial in applications that involve user authentication or registration processes, where secure password input is required.

2. **Secure Form Inputs**: When designing forms that require input of sensitive information, such as credit card details or personal identification numbers (PINs), using a `PasswordField` ensures the secure entry of such data.

3. **Account Management and Profile Settings**: Password fields are valuable in applications that involve account management or profile settings, allowing users to change or update their passwords securely.

### Constructors

The `PasswordField` class has three constructors:

1. `PasswordField(String label, String password)`: Creates a `PasswordField` with a given label and password.
2. `PasswordField(String label)`: Creates a `PasswordField` with a given label but with no pre-populated datetime.
3. `PasswordField()`: Creates a `PasswordField` without any provided information.

### Password Visibility

You can use the `setPasswordReveal` method to control the visibility of the password reveal icon. When set to true, the password reveal icon is visible -  otherwise, it is hidden. You can check whether the password reveal icon is visible using the `isPasswordReveal` method. It returns true if the password reveal icon is visible; otherwise, it returns false. 

### Placeholder Text

You can set placeholder text for the `PasswordField` using the `setPlaceholder` method. The placeholder text is displayed when the field is empty, helping to prompt the user to enter appropriate input into the `PasswordField`.

### Best Practices

As the `PasswordField` component is often associated with sensitive information, consider the following best practices when using the `PasswordField`:

1. **Provide Password Strength Feedback**: Incorporate password strength indicators or feedback mechanisms to help users create strong and secure passwords. Evaluate factors such as length, complexity, and a mix of uppercase and lowercase letters, numbers, and special characters.

2. **Ensure Secure Password Storage**: Implement proper security measures to handle and store passwords securely in your application. Utilize industry-standard encryption algorithms and never store passwords in plain text.

3. **Handle Password Confirmation**: If your application requires users to confirm their password, consider adding a password confirmation field. This helps users avoid errors when entering their password and provides an additional layer of security.

4. **Allow Password Reset**: If your application involves user accounts, provide an option for users to reset their password. This could be in the form of a "Forgot Password" feature that initiates a password recovery process.

5. **Consider Accessibility**: Utilize the PasswordField with accessibility in mind, ensuring it meets accessibility standards such as providing proper labels, and compatibility with assistive technologies.