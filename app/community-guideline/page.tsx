import Image from "next/image";
import Link from "next/link";

export default function CommunityGuideline() {
  return (
    <section className="about">
      <div className="container flex flex-col space-y-5">
        <div className="flex h-11 w-full items-center justify-start gap-5 space-x-5 rounded-[10px] bg-slate-50 px-5 py-[10px]">
          <Image alt="" src="/tabler-icon-route-2.svg" width={24} height={24} />

          <div className="flex space-x-[5px]">
            <Link className="font-sfpro text-sm text-sky-400" href="/">
              Home
            </Link>
            <Image
              alt=""
              src="/tabler-icon-chevron-left.svg"
              width={20}
              height={20}
            />
            <p className="font-sfpro text-sm text-sky-400">
              Community guidelines
            </p>
          </div>
        </div>
        <h3 className="font-sfpro text-[15px] font-bold">
          Are there any task posting guidelines?
        </h3>

        <p className="border-l-2 border-sky-400 pl-[10px]">
          The Taklief platform helps you get more done. To create a safe,
          respectful and rewarding environment, we need you to follow the
          Guidelines below.
        </p>

        <h6 className="font-sfpro text-[15px] font-bold">
          <strong>A. Tasks must be legal</strong>
        </h6>

        <p>
          To ensure a safe and secure experience for all our members, all tasks
          posted must be legal. Soliciting, inducing or encouraging illegal acts
          are strictly prohibited. Scams are also not tolerated on Taklief and
          will be removed.
        </p>

        <h6 className="font-sfpro text-[15px] font-bold">
          B. Prohibited items list
        </h6>

        <p>
          Tasks must not relate to weapons or unlawful activity, which may
          result in furtherance of a crime. Any requests relating to drugs,
          including prescription drugs or drug paraphernalia is prohibited. Not
          only may these activities have serious legal ramifications, but they
          are also against the spirit and values of Taklief.
        </p>

        <h6 className="font-sfpro text-[15px] font-bold">
          C. No escort or adult services
        </h6>

        <p>
          Escort, adult services and massage tasks are strictly prohibited on
          Taklief. This includes tasks or comments which are obscene or sexually
          explicit in nature. Whilst we are pushing boundaries and helping to
          reimagine the future of employment, we draw the line here.
        </p>

        <h6 className="font-sfpro text-[15px] font-bold">
          D. Clear scope, time and budget required
        </h6>

        <p className="border-l-2 border-sky-400 pl-[10px]">
          To help get your tasks completed, it’s important that your task has a
          clear scope, time and budget.
        </p>

        <p>
          <strong>Scope:</strong>&nbsp;The task description should clearly, and
          thoroughly, state what it is that you need done. Adding as much
          information as possible helps the Tasker understand expectations.
        </p>

        {/* <p>&nbsp;</p> */}

        <p>
          <strong>Time:</strong>&nbsp;Does the task need to be completed on a
          specific day or can it be flexible with the Tasker? If specific,
          mention in task description.
        </p>

        {/* <p>&nbsp;</p> */}

        <p>
          <strong>Budget:</strong>&nbsp;Setting a fair price for the amount of
          time and effort required for the task is crucial. Taklief does not
          endorse low pricing of tasks and a task may be moderated, if found to
          be.
        </p>

        <ul>
          {/* <br /> */}
          <li>
            These help Taskers to know whether they have the skills and
            availability to complete your task. It will also help avoid any
            misunderstandings about expectations along the way.
          </li>
        </ul>

        <h6 className="font-sfpro text-[15px] font-bold">
          E. Task based posts
        </h6>

        <p>
          The Taklief platform is a task based platform that encourages you to
          outsource all the weird and quirky things you might need done on any
          given day. However, there are a few types of tasks that are not
          supported to maintain the integrity of the platform. Tasks that are
          deceitful in nature are not allowed. This includes but is not limited
          to requesting fake business reviews, social media likes and follows.
          {/* <br /> */}
          {/* <br /> */}
          {/* &nbsp; */}
        </p>

        <ul>
          <li>
            <div className="border-l-2 border-amber-300 pl-[10px]">
              <strong>Example 1:</strong>&nbsp;Sarah posted a task asking
              Taskers to leave 5 star reviews on her company's website and
              Google maps. Sarah’s task was immediately cancelled from Taklief
              and she was advised her task did not follow the Community
              Guidelines. Academic activities and assignment based tasks are
              strictly prohibited. This includes but is not limited to
              completing an assignment, test or course on someones behalf.
              Additionally, academic assistance in the form of proofreading,
              editing, planning, structuring, referencing and giving feedback on
              someone else's academic work is also not supported.
            </div>
            <br />
            {/* <br /> */}
            {/* <br /> */}
            <div className="border-l-2 border-amber-300 pl-[10px]">
              <strong>Example 2:</strong>&nbsp;Ahmed posted a task requesting a
              Tasker to proofread his assignment which was a 1,000 word essay on
              the French Revolution. Ahmed was contacted shortly after posting
              his task and advised the post had been cancelled, as it was a
              proofreading task and therefore not supported on Taklief. We also
              don’t allow tasks that request quotes for work to be done outside
              of Taklief.
            </div>
            <br />
            {/* <br /> */}
            {/* <br /> */}
            <div className="border-l-2 border-amber-300 pl-[10px]">
              <strong>Example 3:</strong>&nbsp;Saud posted a minimum priced task
              asking for a Tasker to come to his home and give him a quote to
              paint his 3 bedroom house. The task was cancelled by Taklief
              because it was asking for a quote and not for someone to actually
              paint the house. Tasks that require someone to be nude, topless or
              wear clothing like lingerie, swimwear and gym wear are not
              supported.
            </div>
            <br />
            {/* <br /> */}
            {/* <br /> */}
            <div className="border-l-2 border-amber-300 pl-[10px]">
              <strong>Example 4:</strong>&nbsp;Joanne posted a task looking for
              a Tasker to model for a bikini photoshoot. The task was cancelled
              as the Tasker would be required to wear a bikini. Tasks that
              involve investigating or gathering information on an individual or
              business without their knowledge and consent are not supported.
              Debt collection tasks are also not supported. Tasks that ask for
              someone to withdraw cash, buy gift cards, vouchers for the Poster
              or to send money to the Poster via methods like direct bank
              transfers or STCPay are not supported.
            </div>
          </li>
          {/* <br /> */}
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          &nbsp;
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li> */}
        </ul>

        {/* <p>&nbsp;</p> */}

        <h6 className="font-sfpro text-[15px] font-bold">
          <strong>F. No advertising</strong>
        </h6>

        <p>
          We support businesses outsourcing tasks on Taklief to help their
          business grow, however Taklief is not a platform for business
          advertisements, nor a job board for permanent job ads. Taklief is also
          not a platform for any requests to be employed.fdgsfdg
        </p>

        <ul>
          {/* <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          &nbsp;
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li> */}
          <li>
            <div className="border-l-2 border-amber-300 pl-[10px]">
              <strong>Example 1:</strong>Faris posted a task asking for a
              part-time or full-time job as a builder. The task was removed by
              Taklief as job requests are not supported in the Taklief platform
            </div>
            {/* <br /> */}
            {/* <br /> */}
            <br />
            <div className="border-l-2 border-amber-300 pl-[10px]">
              <strong>Example 2:</strong>&nbsp;Amanda owns a driving school and
              posted a task looking for full-time driving instructors, with an
              hourly rate. Amanda’s task was removed as it was considered a
              business advertisement therefore not supported in the Taklief
              platform .
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
