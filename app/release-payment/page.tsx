import Breadcrumb from "../components/shared/Breadcrumb";

export default function ReleasePayment() {
  return (
    <section className="about">
      <div className="container flex flex-col gap-5">
        <Breadcrumb pageName="client_hasnt_released" />
        <h3>The customer hasn't released payment yet, what do I do?</h3>
        <p>
          If you've completed a task but the customer hasn't released payment
          yet, don't panic, stay calm! Here are some steps to follow that can
          help you:
        </p>
        <h5>The payment journey</h5>
        <ol>
          <li>
            Make sure to mark the task as 'complete' if you haven't already. Do
            this by clicking the Request payment button. Remember that customers
            can't release payment unless a task has been marked complete.
          </li>
          <li>
            If you've already done this, send the customer a private message on
            Taklief to let them know you've completed the task and ask if
            they're happy with it. Remember to be polite and professional.&nbsp;
          </li>
          <p className="tip">
            Tip:&nbsp;It would be best to provide proof of completion via
            Taklief Private message&nbsp;
          </p>
          <li>
            If the customer doesn't release payment or reply after 48 hours of
            your private message, contact us for further help. Let Taklief
            Support take it from there! Here are the steps that we follow to
            help you:
          </li>
          <p className="tip">
            Please note:Taklief Support can only help with your outstanding
            payment once the three steps above have been followed.
          </p>
        </ol>

        <ol>
          <li>
            The Support Team will conduct a number of checks on the task. These
            checks can include checking the task title, description, status,
            correspondence between both members and more. This helps us
            understand what has happened on the task.
          </li>
          <li>
            Once the required checks have been completed, the Support Team will
            proceed with following up with the customer on your behalf. This is
            done over a four day period (timeframe may vary) via email
            correspondence. This gives the customer the opportunity to raise any
            questions they have about the Task or payment release.
          </li>
          <li>
            If the customer has an issue with the task, we can help with our
            dispute process. Otherwise, we can release payment.
          </li>
        </ol>
        <h5>Payment will be released in any of these situations:</h5>
        <ol>
          <li>The customer releases payment and closes the task</li>
          <li>
            The customer confirms the task has been completed and has asked the
            Support Team to release it on their behalf
          </li>
          <li>
            The Support Team is satisfied that the task has been completed and
            does not receive correspondence after the four day period (timeframe
            may vary). They can then release the payment on behalf of the
            customer.&nbsp; Payment may not be released if the customer raises
            questions about the completion of the task. The Support Team will
            investigate based on the customer's concerns and assist with the
            next course of action, which may be Taklief's dispute process.&nbsp;
          </li>
        </ol>
      </div>
    </section>
  );
}
