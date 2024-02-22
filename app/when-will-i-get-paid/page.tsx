import CommunityHero from "../components/CommunityHero";
import Breadcrumb from "../components/shared/Breadcrumb";

export default function WhenWillGetPaid() {
  return (
    <section className="about">
      <div className="container flex flex-col gap-5">
        <Breadcrumb pageName="when_will_i_get_paid" />
        <h3 className="font-bold">When will I get paid ?</h3>
        <p>
          When you complete a task and click Request payment, the Poster is sent
          a notification alerting them that they should release the payment if
          they agree the task is complete. Once the Poster has agreed the task
          is done and clicked the release button, payment is immediately
          released from Taklief and begins its journey to you. Our payments are
          handled through a world-class third party payment provider called
          Hyperpay. Due to processing times between Hyperpay, Taklief, and your
          bank, the payment should arrive in your nominated account within 3-7
          business days after release. To help you understand the payment
          journey better, please see below a detailed explanation of how
          payments work on Taklief.
        </p>

        <h5>The payment journey</h5>
        <p>
          When an offer is accepted and a task is assigned, the payment amount
          is debited from a Poster's card and securely transferred to Taklief
          through Hyperpay. It takes between 1-3 days for this transfer to be
          complete, depending on the banking institution and Hyperpay. While the
          task is being completed the payment is securely held by Taklief. When
          the task is complete as confirmed by the Poster, a payment release
          request is sent to Taklief. The payment is then transferred to the
          Tasker’s bank account. This process overall takes 2-4 days, depending
          on the time and day that the request is made and the individual
          financial institution.
        </p>
        <p>
          This is why payment will take between 3-7 business days in total to
          arrive in your bank account.
        </p>

        <h5>
          Why do some task payments come through quickly, and some take longer?
        </h5>
        <p>
          Tasks all have different timeframes that affect their payment
          timelines - sometimes they’re posted, assigned and completed over a
          few days, sometimes this all happens in a matter of hours. Regardless
          of the task timeframe, the payment system requires processing time.
        </p>
        <h6>Example 1:</h6>
        <p>
          Ahmed posted a task on Wednesday. The payment is processed overnight
          and recognised by Taklief on Thursday. Ahmed gets a few offers but
          he’s busy, so doesn’t assign the task until Friday. Tasker Faisal
          completes the task on Saturday and requests payment. Ahmed confirms
          the task has been completed on Saturday. Taklief receives the release
          request and processes the payment on Sunday, the next business day.
          Faisal then receives the funds in his bank account on Monday - two
          business days after he completed the task.
        </p>
        <h6>Example 2:</h6>
        <p>
          Noura posts a task on Wednesday. Tasker Sara makes an offer and Noura
          assigns the task straight away. The payment is being secured by
          Taklief but has not arrived yet. Sara completes the task on Wednesday
          and requests payment. Noura confirms the task has been completed the
          same day, and Taklief receives the release request on Wednesday -
          however, the funds are not available to Taklief until Thursday. Once
          the funds are with Taklief on Thursday the release request is
          actioned. Taklief releases the payment, which takes two business days
          to process. Sara receives the payment on Tuesday, four business days
          after he completed the task.
        </p>
      </div>
      <CommunityHero />
    </section>
  );
}
