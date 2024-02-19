import CommunityHero from "../components/CommunityHero";
import Breadcrumb from "../components/shared/Breadcrumb";

export default function ServiceTerms() {
  return (
    <section className="about px-[116px]">
      <div className="container flex flex-col gap-5 px-5 text-[15px]">
        <Breadcrumb pageName="terms_of_service" />
        <h2>
          <strong>Terms and Conditions</strong>
        </h2>
        <p>Here are our terms and conditions.</p>
        <p className="border-l-[3px] border-sky-400 pl-[10px]">
          Country Specific Terms in Appendix B shall also apply to this
          Agreement.
          <br />
          The Taklief terms &amp; conditions (updated July 2020) outline
          Taklief's and Your obligations and responsibilities on the Taklief
          Platform.
        </p>
        <p>
          <strong>
            User Agreement:&nbsp;
            <a href="https://taklief.com/">www.Taklief.com</a>
            <br />
          </strong>
        </p>
        <p>
          Taklief operates an online platform allowing Users to connect through
          the Taklief Platform with other Users who provide Services. Please
          read these terms and all Policies including the Community Guidelines
          carefully before using the Taklief Platform. These Policies are
          incorporated into this Agreement by reference. <br />
          <br />
          All defined terms in this Agreement have the meaning given to them in
          the Taklief Glossary.
        </p>
        {/* <p>&nbsp;</p> */}

        <h6 className="text-[15px] font-bold">1. SCOPE OF TAKLIEF SERVICES</h6>
        <ul className="list-disc px-4">
          <li className="m-0 p-0">
            1.1 Taklief provides the Taklief Platform to enable Posters to
            publish Posted Tasks.
          </li>
          {/* <br /> */}
          <li className="m-0 p-0">
            1.2 Taskers may make an Offer in response to a Posted Task. Some
            parts of Offer details may be made publicly available, including to
            internet users who are not Users.
          </li>
          {/* <br /> */}
          <li>
            1.3 A Poster may revoke or modify a Posted Task at any time before
            he/she accepts an Offer. Taklief reserves the right to cancel all
            Offers on a Posted Task made prior to the modification.
          </li>
          {/* <br /> */}
          <li>
            1.4 If a Poster accepts an Offer on the Taklief Platform, a Task
            Contract is created between the Tasker and the Poster.
          </li>
          {/* <br /> */}
          <li>
            1.5 Upon creation of a Task Contract, the Poster must pay the Agreed
            Price into the Payment Account.
          </li>
          {/* <br /> */}
          <li>
            1.6 Upon creation of the Task Contract, Taklief has rendered Taklief
            Services and the Service Fee is due and payable.
          </li>
          {/* <br /> */}
          <li>
            1.7 Once the Task Contract is created, the Tasker and Poster may
            vary the Task Contract on the Taklief Platform. The Poster and
            Tasker are encouraged to use Taklief's private messaging system to
            amend or vary the Task Contract (including the Agreed Price) or to
            otherwise communicate.
          </li>
          {/* <br /> */}
          <li>
            1.8 Once the Services are complete, the Tasker must provide notice
            of that on the Taklief Platform.
          </li>
          {/* <br /> */}
          <li>
            1.9 Once the Services are complete, the Poster must provide notice
            of that on the Taklief Platform.
          </li>
          {/* <br /> */}
          <li>
            1.10 Once the Posted Task has been completed and the Poster confirms
            the Services are completed, or if Taklief is satisfied the Services
            have been completed, the Tasker Funds will be released by Taklief
            from the Payment Account to the Tasker. However this process does
            not apply to the payment of Recurring Services which is addressed in
            clause 1.16 below.
          </li>
          {/* <br /> */}
          <li>
            1.11 After the Task Contract is completed, the parties are
            encouraged to review and provide feedback of the Services on the
            Taklief Platform.
          </li>
          {/* <br /> */}
          <li>
            1.12 Taklief may also provide a Search Assist feature enabling
            Posters to submit an Offer for Services.
          </li>
          {/* <br /> */}
          <li>
            1.13 An Offer submitted by a Poster using Search Assist may be
            notified to other Users and such Users may elect to make an Instant
            Claim of it.
          </li>
          {/* <br /> */}
          <li>
            1.14 When using Search Assist a Task Contract is created when a
            Tasker makes an Instant Claim (and in the case of Recurring Services
            a Task Contract is created for the first Occurrence only). For
            Recurring Services, the next Task Contract is created upon
            completion of the previous Occurrence.
          </li>
          {/* <br /> */}
          <li>
            1.15 A Poster may revoke or modify its Offer in using Search Assist,
            including for Recurring Services, at any time before a Tasker makes
            an Instant Claim. Taklief reserves the right to cancel all Posted
            Tasks made prior to the revocation or modification.
          </li>
          {/* <br /> */}
          <li>
            1.16 For Recurring Services and subject to clause 1.17, once the
            Occurrence has been completed and the Tasker confirms the Occurrence
            is completed (or if Taklief is satisfied the Occurrence is
            completed) then the Tasker Funds for that Occurrence will
            automatically be released by Taklief from the Payment Account to the
            Tasker.
          </li>
          {/* <br /> */}
          <li>
            1.17 The Poster may elect to pause automatic payment of Tasker Funds
            for an Occurrence within 24 hours from when the Tasker confirms the
            Occurrence is completed. If the Poster pauses such automatic payment
            in accordance with this clause, then the Tasker Funds will not be
            released by Taklief from the Payment Account to the Tasker until the
            Poster also confirms that the Occurrence is completed.
          </li>
        </ul>
        <h6 className="text-[15px] font-bold">
          2. TAKLIEF’S ROLE AND OBLIGATIONS
        </h6>
        <ul className="list-disc px-4">
          <li className="m-0 p-0">
            2.1 Taklief provides the Taklief Platform only, enabling Users to
            publish Posted Tasks and make Offers on Posted Tasks.
          </li>
          {/* <br /> */}
          <li>
            2.2 Taklief only permits individuals over 18 years of age to become
            Users.
          </li>
          {/* <br /> */}
          <li>
            2.3 Users must be natural persons, but can specify within their
            account description that they represent a business entity.
          </li>
          {/* <br /> */}
          <li>
            2.4 At its absolute discretion, Taklief may refuse to allow any
            person to register or create an account with Taklief or cancel or
            suspend or modify any existing account including if Taklief
            reasonably forms the view that a User's conduct (including a breach
            of this Agreement) is detrimental to the operation of the Taklief
            Platform.
          </li>
          {/* <br /> */}
          <li>
            2.5 Registering and creating an account with Taklief is free. There
            is no charge for a Poster to post tasks, or for other Taklief Users
            to review content on the Taklief Platform, including Posted Tasks.
          </li>
          {/* <br /> */}
          <li>
            2.6 Taklief accepts no liability for any aspect of the Poster and
            Tasker interaction, including but not limited to the description,
            performance or delivery of Services.
          </li>
          {/* <br /> */}
          <li>
            2.7 Taklief has no responsibility and makes no warranty as to the
            truth or accuracy of any aspect of any information provided by
            Users, including, but not limited to, the ability of Taskers to
            perform tasks or supply items, or the honesty or accuracy of any
            information provided by Posters or the Posters' ability to pay for
            the Services requested.
          </li>
          {/* <br /> */}
          <li>
            2.8 Except for liability in relation to any Non-excludable
            Condition, the Taklief Service is provided on an "as is" basis, and
            without any warranty or condition, express or implied. To the extent
            permitted by law, we and our suppliers specifically disclaim any
            implied warranties of title, merchantability, fitness for a
            particular purpose and non-infringement.
          </li>
          {/* <br /> */}
          <li>
            2.9 Taklief has no obligation to any User to assist or involve
            itself in any dispute between Users, although may do so to improve
            User experience.
          </li>
        </ul>
        <h6 className="text-[15px] font-bold">3. USER OBLIGATIONS</h6>
        <ul className="list-disc px-4">
          <li>
            3.1 You will at all times:
            <ul className="list-disc px-4">
              <li>
                (a) comply with this Agreement (including all Policies) and all
                applicable laws and regulations;
              </li>
              <li>
                (b) only post accurate information on the Taklief Platform;
              </li>
              <li>
                (c) ensure that You are aware of any laws that apply to You as a
                Poster or Tasker, or in relation to using the Taklief Platform.
              </li>
            </ul>
          </li>
          <li>
            3.2 You agree that any content (whether provided by Taklief, a User
            or a third party) on the Taklief Platform may not be used on third
            party sites or for other business purposes without Taklief's prior
            permission.
          </li>
          {/* <br /> */}
          <li>
            3.3 You must not use the Taklief Platform for any illegal or immoral
            purpose.
          </li>
          {/* <br /> */}
          <li>
            3.4 You must maintain control of Your Taklief account at all times.
            This includes not allowing others to use Your account, or by
            transferring or selling Your account or any of its content to
            another person.
          </li>
          {/* <br /> */}
          <li>
            3.5 You grant Taklief an unrestricted, worldwide, royalty-free
            licence to use, reproduce, modify and adapt any content and
            information posted on the Taklief Platform for the purpose of
            publishing material on the Taklief Platform and as otherwise may be
            required to provide the Taklief Service, for the general promotion
            of the Taklief Service, and as permitted by this Agreement.
          </li>
          {/* <br /> */}
          <li>
            3.6 You agree that any information posted on the Taklief Platform
            must not, in any way whatsoever, be potentially or actually harmful
            to Taklief or any other person. Harm includes, but is not limited
            to, economic loss that will or may be suffered by Taklief. 3.7
            Without limiting any provision of this Agreement, any information
            You supply to Taklief or publish in a Posted Task (including as part
            of an Offer) must be up to date and kept up to date and must not:
            <ul className="">
              <li>
                *(a) be false, inaccurate or misleading or deceptive;
                <br />
                *(b) be fraudulent or involve the sale of counterfeit or stolen
                items;
                <br />
                *(c) infringe any third party's copyright, patent, trademark,
                trade secret or other proprietary rights or intellectual
                property rights, rights of publicity, confidentiality or
                privacy;
                <br />
                *(d) violate any applicable law, statute, ordinance or
                regulation (including, but not limited to, those governing
                export and import control, consumer protection, unfair
                competition, criminal law, anti-discrimination and trade
                practices/fair trading laws);
                <br />
                *(e) be defamatory, libellous, threatening or harassing;
                <br />
                *(f) be obscene or contain any material that, in Taklief's sole
                and absolute discretion, is in any way inappropriate or
                unlawful, including, but not limited to obscene, inappropriate
                or unlawful images; or
                <br />
                *(g) contain any malicious code, data or set of instructions
                that intentionally or unintentionally causes harm or subverts
                the intended function of any Taklief Platform, including, but
                not limited to viruses, trojan horses, worms, time bombs,
                cancelbots, easter eggs or other computer programming routines
                that may damage, modify, delete, detrimentally interfere with,
                surreptitiously intercept, access without authority or
                expropriate any system, data or Personal Information.
              </li>
              {/* <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              &nbsp;
              <li>&nbsp;</li>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
              <li>&nbsp;</li> */}
            </ul>
          </li>
          <li>
            3.8 Taklief Platform may from time to time engage location-based or
            map-based functionality. The Taklief Platform may display the
            location of Posters and Taskers to persons browsing the Taklief
            Platform. A Poster should never disclose personal details such as
            the Poster's full name, street number, phone number or email address
            in a Posted Task or in any other public communication on the Taklief
            Platform.
          </li>
          {/* <br /> */}
          <li>
            3.9 If You are a Tasker, You must have the right to provide Services
            under a Task Contract and to work in the jurisdiction where the
            Services are performed. You must comply with VAT and regulatory
            obligations in relation to any payment (including Tasker Funds)
            received under a Task Contract.
          </li>
          {/* <br /> */}
          <li>
            3.10 You must not, when supplying Services, charge a Poster any fees
            on top of the Tasker Funds. However, the parties to a Task Contract
            may agree to amend the Agreed Price through the Taklief Platform.
          </li>
          {/* <br /> */}
          <li>
            3.11 You must not request payments outside of the Taklief Platform
            from the Poster for the Services except to the extent permitted by
            clause 3.12 and only if the Taklief Platform does not facilitate the
            reimbursement via the Payment Account of costs considered in clause
          </li>
          {/* <br /> */}
          <li>
            3.12 If a Tasker agrees to pay some costs of completing the Services
            (such as equipment to complete the Services), the Tasker is solely
            responsible for obtaining any reimbursement from the Poster. Taklief
            advises Taskers not to agree to incur costs in advance of receiving
            the payment for these costs, unless the Tasker is confident the
            Poster will reimburse the costs promptly.
          </li>
          {/* <br /> */}
          <li>
            3.13 For the proper operation of the Taklief Platform (including
            insurance, proper pricing and compliance with Policies), the Tasker
            must ensure that, if it subcontracts any part of the performance of
            the Services to a third party in accordance with a Task Contract,
            then that third party must also be a registered User of the Taklief
            Platform.
          </li>
          {/* <br /> */}
          <li>
            3.14 If Taklief determines at its sole discretion that You have
            breached any obligation under this clause 3 or that You have
            breached one or more Task Contracts, it reserves the rights to
            remove any content, Posted Task or Offer You have submitted to the
            Taklief Service or cancel or suspend Your account and/or any Task
            Contracts.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">4. FEES</h6>
        <ul className="list-disc px-4">
          <li>
            4.1 Upon the creation of a Task Contract, the Tasker and Poster each
            owes Taklief the respective portion of the Service Fee. The Service
            Fee will automatically be deducted from the Agreed Price held in the
            Payment Account.
          </li>
          {/* <br /> */}
          <li>
            4.2 If the Posted Task requires a Tasker to incur costs in
            completing the Services, the cost incurred will not be included in
            any calculation of Fees.
          </li>

          {/* <br /> */}
          <li>
            4.3 Fees do not include any fees that may be due to Third Party
            Service providers. All Third Party Service providers are paid
            pursuant to a User's separate agreement with that Third Party
            Service provider.
          </li>
          {/* <br /> */}
          <li>
            4.4 All Fees and charges payable to Taklief are non-cancellable and
            non-refundable, save for Your rights under any Non-Excludable
            Conditions.
          </li>
          {/* <br /> */}
          <li>
            4.5 If Taklief introduces a new service on the Taklief Platform, the
            Fees applying to that service will be payable as from the launch of
            the service.
          </li>
          {/* <br /> */}
          <li>
            4.6 Taklief may set-off any Fees against any Tasker Funds or other
            amounts held by Taklief on behalf of a User.
          </li>
          {/* <br /> */}
          <li>
            4.7 Taklief may restrict a User's account until all Fees have been
            paid.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">5. PAYMENTS AND REFUNDS</h6>
        <ul className="list-disc px-4">
          <li>
            5.1 If the Task Contract is cancelled for any reason (by a Poster, a
            Tasker or under this Agreement) prior to the commencement of the
            Task Contract, then if Taklief is reasonably satisfied that the
            Agreed Price should be returned to the Poster then the Agreed Price
            will be refunded to the Poster as Stored Value and a Cancellation
            Admin Fee will be due to Taklief by the User who the cancellation of
            the Task Contract is attributable to under clause 5.5 or 5.6.
          </li>
          {/* <br /> */}
          <li>
            5.2 Taklief may decide in its absolute discretion to refund the
            Agreed Price back onto the Poster's credit card instead of Stored
            Value or waive the Cancellation Admin Fee.
          </li>
          {/* <br /> */}
          <li>
            5.3 Any amount returned by Taklief to a Poster on behalf of a Tasker
            under clause 5.1 will be a debt owed by the Tasker to Taklief and
            may be offset by Taklief against any other payments owed at any time
            to the Tasker.
          </li>
          {/* <br /> */}
          <li>
            5.4 Any outstanding Cancellation Admin Fee owed by a User under
            clause 5.1 will be a debt owed by that User to Taklief and may also
            be offset by Taklief against any other payments owed at any time to
            the User.
          </li>
          {/* <br /> */}
          <li>
            5.5 Cancellation of a Task Contract will be attributable to the
            Tasker where:
          </li>
          <ul className="list-disc px-4">
            <li>
              (a) the Poster and the Tasker mutually agree to cancel the Task
              Contract; or
            </li>
            {/* <br /> */}
            <li>
              (b) following reasonable but unsuccessful attempts by a Poster to
              contact a Tasker to perform the Task Contract, the Task Contract
              is cancelled by the Poster; or
            </li>
            {/* <br /> */}
            <li>(c) the Tasker cancels the Task Contract; or</li>
            {/* <br /> */}
            <li>
              (d) a Task Contract is cancelled in accordance with clause 3.14 as
              a result of the Tasker’s actions or breach.
            </li>
          </ul>
          <li>
            5.6 A Cancellation of a Task Contract will be attributable to a
            Poster where:
          </li>
          <ul className="list-disc px-4">
            <li>
              (a) the Poster cancels the Task Contract (other than in accordance
              with clause 5.5(b); or
            </li>
            {/* <br /> */}
            <li>
              (b) a Task Contract is cancelled in accordance with clause 3.14 as
              a result of the Poster’s actions or breach..
            </li>
          </ul>
          <li>
            5.7 If the parties agree to any additional cancellation fee payable
            under the Task Contract, it is the responsibility of the party
            aggrieved to claim any amount owed directly from the other.
          </li>
          {/* <br /> */}
          <li>
            5.8 Taklief may take up to 14 days to return the Agreed Price (less
            the Cancellation Admin Fee, if applicable) to the Poster.
          </li>
          {/* <br /> */}
          <li>
            5.9 If, for any reason, the Tasker Funds cannot be transferred or
            otherwise made to the Tasker or returned to the Poster (as the case
            may be) or no claim is otherwise made for the Tasker Funds, the
            Tasker Funds will remain in the Payment Account until paid or
            otherwise for up to three months from the date the Poster initially
            paid the Agreed Price into the Payment Account.
          </li>
          {/* <br /> */}
          <li>
            5.10 Following the 3 months referred to in clause 5.6, and provided
            there is still no dispute in respect of the Tasker Funds, the Tasker
            Funds will be credited to the Poster as Stored Value.
          </li>
          {/* <br /> */}
          <li>
            5.11 If the Task Contract is cancelled and a User who is party to
            the Task Contract can show that work under a Task Contract was
            commenced, then the amount of the Agreed Price to be returned to the
            Poster will be conditional upon the mediation and dispute process in
            clause 18. However, the Cancellation Admin Fee will always be due in
            accordance with clause 5.1.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">6. STORED VALUE</h6>
        <ul className="list-disc px-4">
          <li>
            6.1 Stored Value :
            <ul className="list-disc px-4">
              <li>
                (a) can be used by the credited User to pay for any new Services
                via the Taklief Platform;
              </li>

              <li>(b) are not refundable or redeemable for cash;</li>

              <li>
                (c) cannot be replaced, exchanged or reloaded or transferred to
                another card or account;
              </li>

              <li>
                (d) are valid for 12 months from the date on which that
                particular Stored Value is applied to a User's account, the date
                of issue or purchase or any expiry date applied by Taklief
                (conditional upon any contrary specific jurisdictional
                legislative requirements);
              </li>

              <li>
                (e) if the Stored Value is acquired other than under this
                Agreement, it may also be conditional on compliance with
                additional, or different, terms and conditions, as specified in
                relation to Stored Value, such as a restriction on when the
                Stored Value is redeemable (for example only for a User's first
                Task Contract), specify a minimum Services value, or specify a
                maximum credit or discount value; and
              </li>

              <li>
                (f) must not be reproduced, copied, distributed, or published
                directly or indirectly in any form or by any means for use by an
                entity other than the credited User, or stored in a data
                retrieval system, without Taklief's prior written permission.
              </li>
            </ul>
          </li>
          <li>
            6.2 The User credited with a Stored Value is solely responsible for
            the security of any Stored Value. Save for the Non-Excludable
            Conditions, Taklief will have no liability for any loss or damage to
            the Stored Value and does not have any obligation to replace Stored
            Value.
          </li>
          {/* <br /> */}
          <li>
            6.3 Taklief will not accept, and may refuse or cancel, any Stored
            Value, which it reasonably determines in its discretion, have been
            used in breach of this Agreement or have been forged, tampered with,
            or are otherwise fraudulent and Taklief reserves the right to refer
            any suspected fraudulent activity to relevant law enforcement
            authorities. In particular, Stored Value, such as promotional
            coupons, vouchers or codes distributed or circulated without our
            approval, for example on an internet message board or on a
            "bargains" website, are not valid for use and may be refused or
            cancelled.
          </li>
          {/* <br /> */}
          <li>
            6.4 Taklief is entitled to any value on Stored Value which is not
            redeemed before the Stored Value expires or is cancelled by Taklief.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">7. BUSINESS PARTNERS</h6>
        <ul className="list-disc px-4">
          <li>
            7.1 Taklief may enter into agreements with Business Partners and may
            seek to engage Taskers in the provision of Business Services.
            Taskers who agree to perform Business Services for Business Partners
            acknowledge and agree that Taklief and the Business Partner may
            on-sell Services supplied to third parties for an increased fee.
          </li>
          {/* <br /> */}
          <li>
            7.2 Business Partners may require Taskers providing Business
            Services to be approved or hold particular qualifications. Taklief
            may assist Business Partners to locate suitably qualified Taskers.
            Taklief makes no warranty that it will promote any or all suitably
            qualified Taskers to Business Partners.
          </li>
          {/* <br /> */}
          <li>
            7.3 Business Partners may require Taskers to enter into a Business
            Partner Contract before providing Business Services.
          </li>
          {/* <br /> */}
          <li>
            7.4 Where a Tasker accepts a Posted Task with a Business Partner:
            <ul className="list-disc px-4">
              <li>
                (a) the Tasker must provide Business Services to the Business
                Partner in accordance with the Task Contract and any applicable
                Business Partner Contract; and
              </li>
              {/* <br /> */}
              <li>
                (b) the terms of the Business Partner Contract will prevail to
                the extent of any inconsistency.
              </li>
            </ul>
          </li>
        </ul>

        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">8. PAYMENT FACILITY</h6>
        <ul className="list-disc px-4">
          <li>
            {" "}
            8.1 Taklief uses a Payment Provider to operate the Payment Account.
          </li>
          <li>
            8.2 In so far as it is relevant to the provision of the Payment
            Account, the terms at https://stripe.com/au/ssa are incorporated
            into this Agreement and will prevail over this Agreement to the
            extent of any inconsistency in relation to the provision of the
            Payment Account.
          </li>
          <li>
            8.3 If Taklief changes its Payment Provider You may be asked to
            agree to any further additional terms with those providers. If you
            do not agree to them, you will be given alternative means of
            payment.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">9. THIRD PARTY SERVICES</h6>
        <ul className="list-disc px-4">
          <li>
            9.1 Taklief may from time to time include Third Party Services on
            the Taklief Platform. These Third Party Services are not provided by
            Taklief.
          </li>
          <li>
            9.2 Third Party Services are offered to Users pursuant to the third
            party's terms and conditions. Third Party Services may be promoted
            on the Taklief Platform as a convenience to our Users who may find
            the Third Party Services of interest or of use.
          </li>
          <li>
            9.3 If a User engages with any Third Party Service provider, the
            agreement will be directly between the User and that Third Party
            Service provider.
          </li>
          <li>
            9.4 Taklief makes no representation or warranty as to the Third
            Party Services. However, to help us continue to improve our Taklief
            Platform, Users may inform Taklief of their Third Party Service
            experience here.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text[15px] font-bold">10. VERIFICATION &amp; BADGES</h6>
        <ul className="list-disc px-4">
          <li>10.1 Taklief may use Identity Verification Services.</li>
          <li>
            10.2 You agree that Taklief Identity Verification Services may not
            be fully accurate as all Taklief Services are dependent on
            User-supplied information and/or information or Verification
            Services provided by third parties.{" "}
          </li>
          <li>
            10.3 You are solely responsible for identity verification and
            Taklief accepts no responsibility for any use that is made of an
            Taklief Identity Verification Service.
          </li>
          <li>
            10.4 Taklief Identity Verification Services may be modified at any
            time.
          </li>
          <li>
            10.5 The Taklief Platform may also include a User-initiated feedback
            system to help evaluate Users.
          </li>
          <li>
            10.6 Taklief may make Badges available to Taskers. The available
            Badge can be requested by the Tasker via the Taklief Platform, and
            arranged on behalf of the Tasker and issued by Taklief, for a fee.
            Obtaining Badges may be conditional upon the provision of certain
            information or documentation by the Tasker and determined by Taklief
            or a third party verifier which shall be governed by its terms.
          </li>
          <li>
            10.7 You acknowledge that Badges are point in time checks and may
            not be accurate at the time it is displayed. You acknowledge that to
            the extent You relied on a Badge in entering into a Task Contract,
            you do so aware of this limitation. You should seek to verify any
            Badge with the Tasker prior to commencing the task.
          </li>
          <li>
            10.8 It remains the Tasker's responsibility to ensure that
            information or documentation it provides in obtaining a Badge is
            true and accurate and must inform Taklief immediately if a Badge is
            no longer valid.
          </li>
          <li>
            10.9 Taklief may, at its discretion, issue Badges to Taskers for a
            fee.
          </li>
          <li>
            10.10 The issue of a Badge to a Tasker remains in the control of
            Taklief and the display and use of a Badge is licensed to the Tasker
            for use on the Taklief Platform only. Any verification obtained as a
            result of the issue of a Badge may not be used for any other purpose
            outside of the Taklief Platform.
          </li>
          <li>
            10.11 Taklief retains the discretion and right to not issue, or
            remove without notice, a Badge if You are in breach of any of the
            terms of this Agreement, the Badge has been issued incorrectly,
            obtained falsely, has expired, is no longer valid or for any other
            reason requiring its removal by Taklief.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">11. INSURANCE</h6>
        <ul className="list-disc px-4">
          <li>
            11.1 Taklief may offer its Users an opportunity to obtain insurance
            for certain Task Contracts. All such insurance will be offered by a
            third party. Any application and terms and conditions for such third
            party insurance will be displayed on the Taklief website when they
            are available. Taklief confirms that all insurance policies are
            Third Party Services and governed by further terms set out for Third
            Party Services.
          </li>
          <li>
            11.2 Taklief does not represent that any insurance it acquires or
            which is offered via the Taklief Platform is adequate or appropriate
            for any particular User.
          </li>
          <li>
            11.3 Each User must make its own enquiries about whether any further
            insurance is required and Taskers remain responsible for ensuring
            that they have, and maintain, sufficient insurance to cover the
            Services provided to other Users of the Taklief Platform.
          </li>
          <li>
            11.4 Taklief may also take out other insurance itself and that
            insurance may at Taklief's option extend some types of cover to
            Users. Taklief reserves the right to change the terms of its
            insurance policies with the third party insurance providers at any
            time. A summary of the policies are available on the Taklief website
            and the policy details can be requested via Taklief. Users are
            responsible for familiarising themselves with these details.
          </li>
          <li>
            11.5 You acknowledge and agree that in the event that a claim is
            made relating to any services performed and/or goods provided by a
            Tasker, and the insurance taken out by Taklief (if any) responds to
            that claim then this clause applies. If a claim is made against a
            Tasker, Taklief may (provided that the Tasker consents) elect to
            make a claim under any applicable policy and if the claim is
            successful, Taklief reserves its right to recover any excess or
            deductible payable in respect of the claim from the Tasker. Where
            Taklief makes a claim and the insurer assesses that the Tasker is
            responsible, Taklief is entitled to rely on that assessment. If You
            do not pay any excess due under this clause, Taklief may also elect
            to set this amount off some or all of the excess paid by it against
            future moneys it may owe to You. 11.6 You acknowledge and agree that
            in the event that a claim is made relating to any services performed
            and/or goods provided by a Tasker, and the insurance taken out by
            Taklief (if any) does not respond to the claim or the claim is below
            the excess payable to the insurer, then this clause applies. Taklief
            may elect to reject or pay an amount to settle a claim not covered
            by Taklief's own insurance policies. To the extent that the Tasker
            was or would be liable for the amount of the claim, if Taklief
            elects to pay an amount to settle the claim the amount paid by
            Taklief may be recovered by Taklief from the Tasker. Taklief may
            also elect to set this amount off against future moneys it may owe
            to the Tasker.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">12. FEEDBACK</h6>
        <ul className="list-disc px-4">
          <li>
            12.1 You can complain about any comment made on the Taklief Platform
            using the 'Report' function of the Taklief Platform or contact
            Taklief via the Taklief Platform. 12.2 Taklief is entitled to
            suspend or terminate Your account at any time if Taklief, in its
            sole and absolute discretion, is concerned by any feedback about
            You, or considers Your feedback rating to be problematic for other
            Taklief Users.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">13. LIMITATION OF LIABILITY</h6>
        <li>
          Please see Your Country Specific Terms for the applicable exclusions
          and limitations of liability.
        </li>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">14. PRIVACY</h6>
        <ul className="list-disc px-4">
          <li>
            14.1 Third Party Service providers will provide their service
            pursuant to their own Privacy Policy. Prior to acceptance of any
            service from a third party, You must review and agree to their terms
            of service including their privacy policy.
          </li>
          <li>
            14.2 Taklief will endeavour to permit you to transact anonymously on
            the Taklief Platform. However in order to ensure Taklief can reduce
            the incidence of fraud and other behaviour in breach of the
            Community Guidelines, Taklief reserves the right to ask Users to
            verify themselves in order to remain a User.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">
          15. MODIFICATIONS TO THE AGREEMENT
        </h6>
        <ul className="list-disc px-4">
          <li>
            15.1 Taklief may modify this Agreement or the Policies (and update
            the Taklief pages on which they are displayed) from time to time.
            Taklief will send notification of such modifications to Your Taklief
            account or advise You the next time You login.
          </li>
          <li>
            15.2 When You actively agree to amended terms (for example, by
            clicking a button saying "I accept") or use the Taklief Platform in
            any manner, including engaging in any acts in connection with a Task
            Contract, the amended terms will be effective immediately. In all
            other cases, the amended terms will automatically be effective 30
            days after they are initially notified to You.
          </li>
          <li>
            15.3 If You do not agree with any changes to this Agreement (or any
            of our Policies), You must either terminate your account or You must
            notify Taklief who will terminate Your Taklief account, and stop
            using the Taklief Service.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">16. NO AGENCY</h6>
        <ul className="list-disc px-4">
          <li>
            16.1 No agency, partnership, joint venture, employee-employer or
            other similar relationship is created by this Agreement. In
            particular You have no authority to bind Taklief, its related
            entities or affiliates in any way whatsoever. Taklief confirms that
            all Third Party Services that may be promoted on the Taklief
            Platform are provided solely by such Third Party Service providers.
            To the extent permitted by law, Taklief specifically disclaims all
            liability for any loss or damage incurred by You in any manner due
            to the performance or non-performance of such Third Party Service.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">17. NOTICES</h6>
        <ul className="list-disc px-4">
          <li>
            17.1 Except as stated otherwise, any notices must be given by
            registered ordinary post or by email, either to Taklief's contact
            address as displayed on the Taklief Platform, or to Taklief Users'
            contact address as provided at registration. Any notice shall be
            deemed given:
          </li>

          <ul className="list-disc px-4">
            <li>
              (a) if sent by email, 24 hours after email is sent, unless the
              User is notified that the email address is invalid or the email is
              undeliverable, and
            </li>
            <li>
              (b) if sent by pre-paid post, three Business Days after the date
              of posting, or on the seventh Business Day after the date of
              posting if sent to or posted from outside the jurisdiction in
              which You have Your Taklief Platform account.
            </li>
          </ul>
          <li>
            17.2 Notices related to performance of any Third Party Service must
            be delivered to such third party as set out in the Third Party
            Service provider's terms and conditions.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">
          18. MEDIATION AND DISPUTE RESOLUTION
        </h6>
        <ul className="list-disc px-4">
          <li>
            18.1 Taklief encourages You to try and resolve disputes (including
            claims for returns or refunds) with other Users directly.
            Accordingly, You acknowledge and agree that Taklief may, in its
            absolute discretion, provide Your information as it decides is
            suitable to other parties involved in the dispute.
          </li>
          <li>
            18.2 If a dispute arises with another User, You must co-operate with
            the other User and make a genuine attempt to resolve the dispute.
          </li>

          <li>
            18.3 Taklief may elect to assist Users resolve disputes. Any User
            may refer a dispute to Taklief. You must co-operate with any
            investigation undertaken by Taklief. Taklief reserves the right to
            make a final determination (acting reasonably) based on the
            information supplied by the Users and direct the Payment Provider to
            make payment accordingly. You may raise your dispute with the other
            User or Taklief's determination in an applicable court or tribunal.
          </li>
          <li>
            18.4 Taklief has the right to hold any Agreed Price that is the
            subject of a dispute in the Payment Account, until the dispute has
            been resolved.
          </li>
          <li>
            18.5 Taklief may provide access to a Third Party Dispute Service. If
            such a service is provided, either party may request the other party
            to submit to the Third Party Dispute Service if the parties have
            failed to resolve the dispute directly. Terms and conditions for the
            Third Party Dispute Service will be available on request. The Third
            Party Dispute Service is a Third Party Service and Users are
            responsible for paying any costs associated with the Third Party
            Dispute Service in accordance with the Third Party Dispute Service
            terms and conditions.
          </li>
          <li>
            18.6 Disputes with any Third Party Service provider must proceed
            pursuant to any dispute resolution process set out in the terms of
            service of the Third Party Service provider.
          </li>
          <li>
            18.7 If You have a complaint about the Taklief Service please
            contact us here. 18.8 If Taklief provides information about other
            Users to You for the purposes of resolving disputes under this
            clause, You acknowledge and agree that such information will be used
            only for the purpose of resolving the dispute (and no other purpose)
            and that you will be responsible and liable to Taklief for any
            costs, losses or liabilities incurred by Taklief in relation to any
            claims relating to any other use of information not permitted by
            this Agreement.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">19. TERMINATION</h6>
        <ul className="list-disc px-4">
          <li>
            19.1 Either You or Taklief may terminate your account and this
            Agreement at any time for any reason.
          </li>
          <li>
            19.2 Termination of this Agreement does not affect any Task Contract
            that has been formed between Taklief Users.
          </li>
          <li>
            19.3 Third Party Services are conditional upon, and governed by,
            Third Party Service provider terms and conditions.
          </li>
          <li>
            19.4 Sections 4 (Fees), 13 (Limitation of Liability) and 18
            (Mediation and Dispute Resolution) and any other terms which by
            their nature should continue to apply, will survive any termination
            or expiration of this Agreement.
          </li>
          <li>
            19.5 If Your account or this Agreement are terminated for any reason
            then You may not without Taklief's consent (in its absolute
            discretion) create any further accounts with Taklief and we may
            terminate any other accounts You operate.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h6 className="text-[15px] font-bold">20. GENERAL</h6>
        <ul className="list-disc px-4">
          <li>
            20.1 This Agreement is governed by the laws specified in Your
            Country Specific Terms.
          </li>
          <li>
            20.2 The provisions of this Agreement are severable, and if any
            provision of this Agreement is held to be invalid or unenforceable,
            such provision may be removed and the remaining provisions will be
            enforceable.
          </li>

          <li>
            20.3 This Agreement may be assigned or novated by Taklief to a third
            party without your consent. In the event of an assignment or
            novation the User will remain bound by this Agreement.
          </li>

          <li>
            20.4 This Agreement sets out the entire understanding and agreement
            between the User and Taklief with respect to its subject matter.
          </li>

          <li>Revised July 2020 copyright Taklief 2020</li>
        </ul>
        <h4 className="text-[25px]">
          <strong>APPENDIX A:</strong>
        </h4>
        <h6 className="text-[25px] font-bold">MODEL TASK CONTRACT</h6>
        <h6 className="text-[15px] font-bold">COUNTRY SPECIFIC TERMS</h6>
        <h6 className="text-[15px] font-bold">
          The kingdom of Saudi Arabian Terms
        </h6>
        <p className="border-l-[3px] border-sky-400 pl-[10px]">
          {/* The terms used in this Task Contract have the meaning set out in the
          Taklief Glossary. A Task Contract is created in accordance with the
          Taklief Agreement. Unless otherwise agreed, the Poster and the Tasker
          enter into a Task Contract on the following terms: */}
          If You are a User who has Your Taklief Platform account in (or the
          Services are performed in) The kingdom of Saudi Arabia then the
          following terms will also apply to or may vary this Agreement to the
          extent specified:
        </p>
        {/* <h6>1 COMMENCEMENT DATE AND TERM</h6> */}
        <p>&nbsp;</p>
        <p className="border-l-[3px] border-sky-400 pl-[10px]">
          <ul className="list-disc px-4">
            a) a reference to SAR, ﷼ or SR is to The kingdom of Saudi Arabian
            currency;
            <br />
            b) The following is added as clause 3.3 in the Model Contract of
            Appendix A "3.3 The parties incorporate the Consumer Guarantees into
            the Task Contract, even if they are not already incorporated by
            law.";
            <br />
            c) The exclusions and limitations of liability shall be as follows:
            <ul className="list-disc px-4">
              <li>
                (1) Except for liability in relation to breach of Non-excludable
                Condition, to the extent permitted by law, Taklief specifically
                disclaims all liability for any loss or damage (actual, special,
                direct, indirect and consequential) of every kind and nature,
                known and unknown, suspected and unsuspected, disclosed and
                undisclosed (including, without limitation, loss or damage
                relating to any inaccuracy of information provided, or the lack
                of fitness for purpose of any goods or service supplied),
                arising out of or in any way connected with any transaction
                between Posters and Taskers.
              </li>
              <li>
                (2) Except for liability in relation to a breach of any
                Non-excludable Condition, to the extent permitted by law,
                Taklief specifically disclaims all liability for any loss or
                damage (actual, special, direct, indirect and consequential) of
                every kind and nature, known and unknown, suspected and
                unsuspected, disclosed and undisclosed (including, without
                limitation, loss or damage relating to any inaccuracy of
                information provided, or the lack of fitness for purpose of any
                goods or service supplied), arising out of or in any way
                connected with any transaction between You and any Third Party
                Service provider who may be included from time to time on the
                Taklief Platform.
              </li>
              <li>
                (3) Except for liability in relation to a breach of any
                Non-excludable Condition, and to the extent permitted by law,
                Taklief is not liable for any Consequential Loss arising out of
                or in any way connected with the Taklief Services.
              </li>
              <li>
                (4) Except for liability in relation to a breach of any
                Non-excludable Condition, Taklief's liability to any User of the
                Taklief Service is limited to the total amount of payment made
                by that User to Taklief during the twelve month period prior to
                any incident causing liability of Taklief, or SAR50.00,
                whichever is greater.
              </li>
              <li>
                (5) Taklief's liability to You for a breach of any
                Non-excludable Condition (other than a Non-excludable Condition
                that by law cannot be limited) is limited, at our option to any
                one of resupplying, replacing or repairing, or paying the cost
                of resupplying, replacing or repairing goods in respect of which
                the breach occurred, or supplying again or paying the cost of
                supplying again, services in respect of which the breach
                occurred.
              </li>
            </ul>
          </ul>
        </p>

        <p>&nbsp;</p>
        <h6 className="text-[25px] font-bold">Taklief Glossary</h6>
        <p>
          "Agreement" means the most updated version of the agreement between
          Taklief and a User.
          <br />
          "Agreed Price" means agreed price for Services (including any
          variation) paid into the Payment Account made by the Poster but does
          not include any costs incurred by the Tasker when completing Services
          which the Poster agrees to reimburse.
          <br />
          "Taklief" means "we" "us" "our" means the legal entity prescribed in
          Your Country Specific Terms.
          <br />
          "Taklief Badge" means a badge that may be issued to a User based on
          the User meeting certain qualifications or other thresholds, including
          Verification Icons, as determined and set by Taklief.
          <br />
          "Taklief Platform" means the Taklief website
          at http://www.taklief.org/, Taklief smartphone app, and any other
          affiliated platform that may be introduced from time to time.
          <br />
          "Taklief Service" means the service of providing the Taklief Platform.
          <br />
          "Badge" means an Taklief Badge and Verification Icon.
          <br />
          "Business Day" means a day on which banks are open for general
          business in the jurisdiction where Users have their Taklief Platform
          account, other than a Saturday, Sunday or public holiday.
          <br />
          "Business Partner Contract" means a contract between a Business
          Partner and a Tasker to perform Business Services.
          <br />
          "Business Partner" means the business or individual that enters into
          an agreement with Taklief to acquire Business Services.
          <br />
          "Business Services" means Services provided by a Tasker to a Business
          Partner acquired for the purpose of on selling to a third party (such
          as the Business Partner's customer).
          <br />
          "Cancellation Admin Fee" means the Fee payable by a Poster or a Tasker
          for cancelling a Task Contract and will not exceed 22% of the Agreed
          Price.
          <br />
          "Consequential Loss" means any loss, damage or expense recoverable at
          law:
        </p>
        <p>
          <ul className="list-disc px-4">
            <li>
              (a) other than a loss, damage or expense that would be suffered or
              incurred by any person in a similar situation to the person
              suffering or incurring the loss, damage or expense; or
            </li>
            <li>
              (b) which is a loss of:
              <ul className="list-disc px-4">
                <li>a. opportunity or goodwill;</li>
                <li>b. profit, revenue or anticipated savings; or</li>
                <li>c. data or corruption of data.</li>
                <li>d. value of any equipment,</li>
              </ul>
            </li>
          </ul>
          and any costs or expenses incurred in connection with the foregoing.
          <br />
          "Country Specific Terms" means those terms set out in Appendix B.
          <br />
          "Fees" means all fees payable to Taklief by Users including the
          Service Fee.
          <br />
          "Identity Verification Services" means the tools available to help
          Users verify the identity, qualifications or skills of other Users
          including mobile phone verification, verification of payment
          information, References, integration with social media, Taklief Badges
          and Verification Icons.
          <br />
          "Instant Claim" means the acceptance of an Offer by a Tasker via the
          Search Assist function.
          <br />
          "Marketing Material" means any updates, news and special offers in
          relation to Taklief or its Third Party Services.
          <br />
          "Non-excludable Condition" means any implied condition, warranty or
          guarantee in a contract, the exclusion of which would contravene the
          law or cause any part of the contract to be void. Further detail on
          the Non-excludable Conditions for consumers in The kingdom of Saudi
          Arabia is set out in the relevant Your Country Specific Terms.
          <br />
          "Occurrence" means each individual occurrence of services to be
          performed by a Tasker that form part of Recurring Services.
          <br />
          "Offer" means an offer made by a Tasker in response to a Posted Task
          to perform the Services. or an offer made by a Poster for the
          performance of Services by a Tasker when using Search Assist
          <br />
          "Payment Account" means the account operated by the Payment Provider.
          <br />
          "Payment Provider" means an entity appointed by Taklief that manages
          and operates the Payment Account including accepting payments from and
          making payments to Users.
          <br />
          "Personal Information" has the same meaning as described in Your
          Country Specific Terms.
          <br />
          "Policies" means the policies posted by Taklief on the Taklief
          Platform, including but not limited to the Community Guidelines.
          <br />
          "Poster" means a User that posts on the Taklief Platform in search of
          particular Services.
          <br />
          "Posted Task" means the Poster's request for Services published on the
          Platform (including via Search Assist), and includes the deadline for
          completion, price and description of the Services to be provided.
          <br />
          "Poster Service Fee" means the fee payable by the Poster to Taklief as
          consideration for the Taklief Services (and comprised as part of the
          Agreed Price) displayed to a Poster prior to entering into each Task
          Contract
          <br />
          "Recurring Services" means the same services procured by a Poster
          using the Search Assist feature from the same Tasker on a recurring
          basis, for example weekly, fortnightly or monthly.
          <br />
          "Reference" means a feature allowing a User to request other Users to
          post a reference on the Taklief Platform endorsing that User.
          <br />
          "Search Assist" means a feature of the Taklief Platform whereby a
          Poster can submit specific details of a Posted Task with Taklief's
          assistance to calculate the Agreed Price and find potential Taskers to
          perform the Services. This may also be referred to on the Taklief
          Platform as "Instant Booking".
          <br />
          "Service Fee" means the Poster Service Fee and the Tasker Service Fee.
          <br />
          "Services" means the services to be rendered as described in the
          Posted Task, including any variations or amendments agreed before or
          subsequent to the creation of a Task Contract and for Recurring
          Services the Services are the services to be performed under each
          Occurrence.
          <br />
          "Stored Value" means the physical or virtual card, coupon, voucher or
          code containing credit or a discount or refund provided as credit or
          anything else identified or described as 'Stored Value' in this
          Agreement, for use on the Taklief Platform.
          <br />
          "Task Contract" means the separate contract which is formed between a
          Poster and a Tasker for Services. In the absence of, or in addition
          to, any terms specifically agreed, the model terms of which are
          included in Appendix A to the Agreement apply to Task Contracts.
          <br />
          "Tasker" means a User who provides Services to Posters.
          <br />
          "Tasker Funds" means the Agreed Price less the Service Fee.
          <br />
          "Tasker Service Fee" means the fee payable by the Tasker to Taklief as
          consideration for the Taklief Services (and comprised as part of the
          Agreed Price) displayed to a Tasker prior to entering into each Task
          Contract.
          <br />
          "Third Party Dispute Service" means a third party dispute resolution
          service provider used to resolve any disputes between Users.
          <br />
          "Third Party Service" means the promotions and links to services
          offered by third parties as may be featured on the Taklief Platform
          from time to time.
          <br />
          "User" or "You" means the person who has signed up to use the Taklief
          Platform, whether as the Poster, Tasker, or otherwise.
          <br />
          "Verification Icons" means the icons available to be displayed on a
          User's profile and any such posts on the Taklief Platform to confirm
          details such as a User's qualification, license, certificate or other
          skill.
        </p>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">Rules of Interpretation:</h6>
        <p>
          In the Taklief Agreement and all Policies, except where the context
          otherwise requires:
          <ul className="list-disc px-4">
            <li>
              (a) the singular includes the plural and vice versa, and a gender
              includes other genders;
            </li>
            <li>
              (b) another grammatical form of a defined word or expression has a
              corresponding meaning;
            </li>

            <li>
              (c) a reference to a document or instrument includes the document
              or instrument as novated, altered, supplemented or replaced from
              time to time;
            </li>
            <li>
              (d) the applicable currency shall be the currency specified in
              Your Country Specific Terms;
            </li>
            <li>
              (e) a reference to a person includes a natural person,
              partnership, body corporate, association, governmental or local
              authority or agency or other entity;
            </li>
            <li>
              (f) a reference to a statute, ordinance, code or other law
              includes regulations and other instruments under it and
              consolidations, amendments, re-enactments or replacements of any
              of them;
            </li>
            <li>
              (g) the meaning of general words is not limited by specific
              examples introduced by including, for example or similar
              expressions;
            </li>
            <li>
              (h) headings are for ease of reference only and do not affect
              interpretation;
            </li>
            <li>
              (i) any agreement, representation, warranty or indemnity in favour
              of two or more parties (including where two or more persons are
              included in the same defined term) is for the benefit of them
              jointly and severally; and
            </li>
            <li>
              (j) a rule of construction does not apply to the disadvantage of a
              party because the party was responsible for the preparation of
              this agreement or any part of it.
            </li>
          </ul>
        </p>

        <p>&nbsp;Revised July 2020 copyright Taklief 2020</p>
        <ul>
          <br />
          <li>&nbsp;</li>
        </ul>
      </div>
      <CommunityHero />
    </section>
  );
}
