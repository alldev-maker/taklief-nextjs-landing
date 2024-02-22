"use client";
import CommunityHero from "../components/CommunityHero";
import Breadcrumb from "../components/shared/Breadcrumb";
import { useTranslation } from "react-i18next";

export default function ServiceTerms() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="container flex flex-col gap-5 px-5 text-[15px]">
        <Breadcrumb pageName="terms_of_service" />
        <h2>
          <strong>{t("terms_and_conditions")}</strong>
        </h2>
        <p>{t("terms_and_conditions_sub")}</p>
        <p className="border-l-[3px] border-sky-400 pl-[10px]">
          {t("taklief_terms_and_conditions")}
          <br />
          {t("taklief_terms_and_conditions_2")}
        </p>
        <p>
          <strong>
            {t("user_agreement")}&nbsp;
            <a href="https://taklief.com/">{t("taklief_website")}</a>
            <br />
          </strong>
        </p>
        <p>
          {t("taklief_platform_description")} <br />
          <br />
          {t("taklief_platform_description_2")}
        </p>
        {/* <p>&nbsp;</p> */}

        <h6 className="text-[15px] font-bold">
          {t("scope_of_taklief_services")}
        </h6>
        <ul className="list-disc px-4">
          <li className="m-0 p-0">{t("taklief_platform_provision")}</li>
          <li className="m-0 p-0">{t("taskers_offer")}</li>
          <li className="m-0 p-0">{t("poster_modify_task")}</li>
          <li className="m-0 p-0">{t("task_contract_creation")}</li>
          <li className="m-0 p-0">{t("poster_payment")}</li>
          <li className="m-0 p-0">{t("taklief_services_fee")}</li>
          <li className="m-0 p-0">{t("task_contract_variation")}</li>
          <li className="m-0 p-0">{t("tasker_notice_completion")}</li>
          <li className="m-0 p-0">{t("poster_notice_completion")}</li>
          <li className="m-0 p-0">{t("task_completion_funds_release")}</li>
          <li className="m-0 p-0">{t("task_contract_review_feedback")}</li>
          <li className="m-0 p-0">{t("search_assist_feature")}</li>
          <li className="m-0 p-0">{t("offer_submission_notification")}</li>
          <li className="m-0 p-0">
            {t("task_contract_creation_search_assist")}
          </li>
          <li className="m-0 p-0">{t("offer_revocation_modification")}</li>
          <li className="m-0 p-0">{t("automatic_payment_tasker_funds")}</li>
          <li className="m-0 p-0">{t("automatic_payment_pause")}</li>
        </ul>
        <h6 className="text-[15px] font-bold">
          {t("taklief_role_and_obligations")}
        </h6>
        <ul className="list-disc px-4">
          <li className="m-0 p-0">{t("taklief_platform_provision_2")}</li>
          <li>{t("age_requirement")}</li>
          <li>{t("user_natural_persons")}</li>
          <li>{t("registration_approval_discretion")}</li>
          <li>{t("account_creation_free")}</li>
          <li>{t("interaction_liability")}</li>
          <li>{t("information_accuracy_warranty")}</li>
          <li>{t("service_warranty")}</li>
          <li>{t("dispute_resolution")}</li>
        </ul>
        <h6 className="text-[15px] font-bold">{t("user_obligations.title")}</h6>
        <ul className="list-disc px-4">
          <li>
            {t("user_obligations.obligations.obligation_3_1.text")}
            <ul className="list-disc px-4">
              <li>
                (a){" "}
                {t("user_obligations.obligations.obligation_3_1.subpoints.a")}
              </li>
              <li>
                (b){" "}
                {t("user_obligations.obligations.obligation_3_1.subpoints.b")}
              </li>
              <li>
                (c){" "}
                {t("user_obligations.obligations.obligation_3_1.subpoints.c")}
              </li>
            </ul>
          </li>
          <li>{t("user_obligations.obligations.obligation_3_2")}</li>
          <li>{t("user_obligations.obligations.obligation_3_3")}</li>
          <li>{t("user_obligations.obligations.obligation_3_4")}</li>
          <li>{t("user_obligations.obligations.obligation_3_5")}</li>
          <li>{t("user_obligations.obligations.obligation_3_6")}</li>
          <li>
            {t("user_obligations.obligations.obligation_3_7.text")}
            <ul className="">
              <li>
                *(a){" "}
                {t("user_obligations.obligations.obligation_3_7.subpoints.a")}
                <br />
                *(b){" "}
                {t("user_obligations.obligations.obligation_3_7.subpoints.b")}
                <br />
                *(c){" "}
                {t("user_obligations.obligations.obligation_3_7.subpoints.c")}
                <br />
                *(d){" "}
                {t("user_obligations.obligations.obligation_3_7.subpoints.d")}
                <br />
                *(e){" "}
                {t("user_obligations.obligations.obligation_3_7.subpoints.e")}
                <br />
                *(f){" "}
                {t("user_obligations.obligations.obligation_3_7.subpoints.f")}
                <br />
                *(g){" "}
                {t("user_obligations.obligations.obligation_3_7.subpoints.g")}
              </li>
            </ul>
          </li>
          <li>{t("user_obligations.obligations.obligation_3_8")}</li>
          <li>{t("user_obligations.obligations.obligation_3_9")}</li>
          <li>{t("user_obligations.obligations.obligation_3_10")}</li>
          <li>{t("user_obligations.obligations.obligation_3_11")}</li>
          <li>{t("user_obligations.obligations.obligation_3_12")}</li>
          <li>{t("user_obligations.obligations.obligation_3_13")}</li>
          <li>{t("user_obligations.obligations.obligation_3_14")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">{t("fees_section.title")}</h6>
        <ul className="list-disc px-4">
          <li>{t("fees_section.fees.fee_4_1")}</li>
          <li>{t("fees_section.fees.fee_4_2")}</li>
          <li>{t("fees_section.fees.fee_4_3")}</li>
          <li>{t("fees_section.fees.fee_4_4")}</li>
          <li>{t("fees_section.fees.fee_4_5")}</li>
          <li>{t("fees_section.fees.fee_4_6")}</li>
          <li>{t("fees_section.fees.fee_4_7")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("payments_and_refunds_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>
            {t("payments_and_refunds_section.payments_and_refunds.payment_5_1")}
          </li>
          <li>
            {t("payments_and_refunds_section.payments_and_refunds.payment_5_2")}
          </li>
          <li>
            {t("payments_and_refunds_section.payments_and_refunds.payment_5_3")}
          </li>
          <li>
            {t("payments_and_refunds_section.payments_and_refunds.payment_5_4")}
          </li>
          <li>
            {t("payments_and_refunds_section.payments_and_refunds.payment_5_5")}
            <ul className="list-disc px-4">
              <li>
                {t(
                  "payments_and_refunds_section.payments_and_refunds.payment_5_5_sublist.a"
                )}
              </li>
              <li>
                {t(
                  "payments_and_refunds_section.payments_and_refunds.payment_5_5_sublist.b"
                )}
              </li>
              <li>
                {t(
                  "payments_and_refunds_section.payments_and_refunds.payment_5_5_sublist.c"
                )}
              </li>
              <li>
                {t(
                  "payments_and_refunds_section.payments_and_refunds.payment_5_5_sublist.d"
                )}
              </li>
            </ul>
          </li>
          <li>
            {t("payments_and_refunds_section.payments_and_refunds.payment_5_6")}
            <ul className="list-disc px-4">
              <li>
                {t(
                  "payments_and_refunds_section.payments_and_refunds.payment_5_6_sublist.a"
                )}
              </li>
              <li>
                {t(
                  "payments_and_refunds_section.payments_and_refunds.payment_5_6_sublist.b"
                )}
              </li>
            </ul>
          </li>
          <li>
            {t("payments_and_refunds_section.payments_and_refunds.payment_5_7")}
          </li>
          <li>
            {t("payments_and_refunds_section.payments_and_refunds.payment_5_8")}
          </li>
          <li>
            {t("payments_and_refunds_section.payments_and_refunds.payment_5_9")}
          </li>
          <li>
            {t(
              "payments_and_refunds_section.payments_and_refunds.payment_5_10"
            )}
          </li>
          <li>
            {t(
              "payments_and_refunds_section.payments_and_refunds.payment_5_11"
            )}
          </li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("stored_value_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>
            {t("stored_value_section.stored_value_6_1.text")}
            <ul className="list-disc px-4">
              <li>{t("stored_value_section.stored_value_6_1.item_a")}</li>
              <li>{t("stored_value_section.stored_value_6_1.item_b")}</li>
              <li>{t("stored_value_section.stored_value_6_1.item_c")}</li>
              <li>{t("stored_value_section.stored_value_6_1.item_d")}</li>
              <li>{t("stored_value_section.stored_value_6_1.item_e")}</li>
              <li>{t("stored_value_section.stored_value_6_1.item_f")}</li>
            </ul>
          </li>
          <li>{t("stored_value_section.stored_value_6_2")}</li>
          <li>{t("stored_value_section.stored_value_6_3")}</li>
          <li>{t("stored_value_section.stored_value_6_4")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("business_partners_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>{t("business_partners_section.business_partners_7_1")}</li>
          <li>{t("business_partners_section.business_partners_7_2")}</li>
          <li>{t("business_partners_section.business_partners_7_3")}</li>
          <li>
            {t("business_partners_section.business_partners_7_4.text")}
            <ul className="list-disc px-4">
              <li>
                {t("business_partners_section.business_partners_7_4.item_a")}
              </li>
              <li>
                {t("business_partners_section.business_partners_7_4.item_b")}
              </li>
            </ul>
          </li>
        </ul>

        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("payment_facility_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>{t("payment_facility_section.payment_facility_8_1")}</li>
          <li>{t("payment_facility_section.payment_facility_8_2")}</li>
          <li>{t("payment_facility_section.payment_facility_8_3")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("third_party_services_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>{t("third_party_services_section.third_party_services_9_1")}</li>
          <li>{t("third_party_services_section.third_party_services_9_2")}</li>
          <li>{t("third_party_services_section.third_party_services_9_3")}</li>
          <li>{t("third_party_services_section.third_party_services_9_4")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("verification_and_badges_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_1")}
          </li>
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_2")}
          </li>
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_3")}
          </li>
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_4")}
          </li>
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_5")}
          </li>
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_6")}
          </li>
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_7")}
          </li>
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_8")}
          </li>
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_9")}
          </li>
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_10")}
          </li>
          <li>
            {t("verification_and_badges_section.verification_and_badges_10_11")}
          </li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("insurance_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>{t("insurance_section.insurance_11_1")}</li>
          <li>{t("insurance_section.insurance_11_2")}</li>
          <li>{t("insurance_section.insurance_11_3")}</li>
          <li>{t("insurance_section.insurance_11_4")}</li>
          <li>{t("insurance_section.insurance_11_5")}</li>
          <li>{t("insurance_section.insurance_11_6")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">{t("feedback_section.title")}</h6>
        <ul className="list-disc px-4">
          <li>{t("feedback_section.feedback_12_1")}</li>
          <li>{t("feedback_section.feedback_12_2")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("limitation_of_liability_section.title")}
        </h6>
        <li>{t("limitation_of_liability_section.content")}</li>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">{t("privacy_section.title")}</h6>
        <ul className="list-disc px-4">
          <li>{t("privacy_section.privacy_14_1")}</li>
          <li>{t("privacy_section.privacy_14_2")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("modifications_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>{t("modifications_section.modifications_15_1")}</li>
          <li>{t("modifications_section.modifications_15_2")}</li>
          <li>{t("modifications_section.modifications_15_3")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("no_agency_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>{t("no_agency_section.no_agency_16_1")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">{t("notices_section.title")}</h6>
        <ul className="list-disc px-4">
          <li>{t("notices_section.notices_17_1")}</li>
          <ul className="list-disc px-4">
            <li>{t("notices_section.notices_17_1_a")}</li>
            <li>{t("notices_section.notices_17_1_b")}</li>
          </ul>
          <li>{t("notices_section.notices_17_2")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("mediation_and_dispute_resolution_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>
            {t(
              "mediation_and_dispute_resolution_section.mediation_and_dispute_resolution_18_1"
            )}
          </li>
          <li>
            {t(
              "mediation_and_dispute_resolution_section.mediation_and_dispute_resolution_18_2"
            )}
          </li>
          <li>
            {t(
              "mediation_and_dispute_resolution_section.mediation_and_dispute_resolution_18_3"
            )}
          </li>
          <li>
            {t(
              "mediation_and_dispute_resolution_section.mediation_and_dispute_resolution_18_4"
            )}
          </li>
          <li>
            {t(
              "mediation_and_dispute_resolution_section.mediation_and_dispute_resolution_18_5"
            )}
          </li>
          <li>
            {t(
              "mediation_and_dispute_resolution_section.mediation_and_dispute_resolution_18_6"
            )}
          </li>
          <li>
            {t(
              "mediation_and_dispute_resolution_section.mediation_and_dispute_resolution_18_7"
            )}
          </li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("termination_section.title")}
        </h6>
        <ul className="list-disc px-4">
          <li>{t("termination_section.termination_19_1")}</li>
          <li>{t("termination_section.termination_19_2")}</li>
          <li>{t("termination_section.termination_19_3")}</li>
          <li>{t("termination_section.termination_19_4")}</li>
          <li>{t("termination_section.termination_19_5")}</li>
        </ul>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">{t("general_section.title")}</h6>
        <ul className="list-disc px-4">
          <li>{t("general_section.general_20_1")}</li>
          <li>{t("general_section.general_20_2")}</li>
          <li>{t("general_section.general_20_3")}</li>
          <li>{t("general_section.general_20_4")}</li>
        </ul>
        <h4 className="text-[25px]">
          <strong>{t("appendix_section.appendix_title")}</strong>
        </h4>
        <h6 className="text-[25px] font-bold">
          {t("appendix_section.task_contract_title")}
        </h6>
        <h6 className="text-[15px] font-bold">
          {t("appendix_section.country_specific_title")}
        </h6>
        <h6 className="text-[15px] font-bold">
          {t("appendix_section.saudi_arabia_terms")}
        </h6>
        <p className="border-l-[3px] border-sky-400 pl-[10px]">
          {t("appendix_section.saudi_arabia_description")}
        </p>
        <p>&nbsp;</p>
        <div className="border-l-[3px] border-sky-400 pl-[10px]">
          <ul className="list-disc">
            {t("sa_terms_section.currency_reference")}
            <br />
            {t("sa_terms_section.model_contract_update")}
            <br />
            {t("sa_terms_section.liability_exclusions")}{" "}
            <ul className="list-disc px-4">
              <li>{t("sa_terms_section.liability_points.point_1")}</li>
              <li>{t("sa_terms_section.liability_points.point_2")}</li>
              <li>{t("sa_terms_section.liability_points.point_3")}</li>
              <li>{t("sa_terms_section.liability_points.point_4")}</li>
              <li>{t("sa_terms_section.liability_points.point_5")}</li>
            </ul>
          </ul>
        </div>

        <p>&nbsp;</p>
        <h6 className="text-[25px] font-bold">
          {t("glossary_section.agreement")}
        </h6>
        <p>
          {t("glossary_section.agreed_price")}
          <br />
          {t("glossary_section.taklief")}
          <br />
          {t("glossary_section.taklief_badge")}
          <br />
          {t("glossary_section.taklief_platform")}
          <br />
          {t("glossary_section.taklief_service")}
          <br />
          {t("glossary_section.badge")}
          <br />
          {t("glossary_section.business_day")}
          <br />
          {t("glossary_section.business_partner_contract")}
          <br />
          {t("glossary_section.business_partner")}
          <br />
          {t("glossary_section.business_services")}
          <br />
          {t("glossary_section.cancellation_admin_fee")}
          <br />
          {t("glossary_section.consequential_loss")}
        </p>
        <div>
          <ul className="list-disc px-4">
            <li>{t("definitions_section.a")}</li>
            <li>
              {t("definitions_section.b")}
              <ul className="list-disc px-4">
                <li>{t("definitions_section.b1")}</li>
                <li>{t("definitions_section.b2")}</li>
                <li>{t("definitions_section.b3")}</li>
                <li>{t("definitions_section.b4")}</li>
              </ul>
            </li>
          </ul>
          and any costs or expenses incurred in connection with the foregoing.
          <br />
          {t("country_specific_terms")}
          <br />
          {t("fees")}
          <br />
          {t("identity_verification_services")}
          <br />
          {t("instant_claim")}
          <br />
          {t("marketing_material")}
          <br />
          {t("non_excludable_condition")}
          <br />
          {t("occurrence")}
          <br />
          {t("offer")}
          <br />
          {t("payment_account")}
          <br />
          {t("payment_provider")}
          <br />
          {t("personal_information")}
          <br />
          {t("policies")}
          <br />
          {t("poster")}
          <br />
          {t("posted_task")}
          <br />
          {t("poster_service_fee")}
          <br />
          {t("recurring_services")}
          <br />
          {t("reference")}
          <br />
          {t("search_assist")}
          <br />
          {t("service_fee")}
          <br />
          {t("services")}
          <br />
          {t("stored_value")}
          <br />
          {t("task_contract")}
          <br />
          {t("tasker")}
          <br />
          {t("tasker_funds")}
          <br />
          {t("tasker_service_fee")}
          <br />
          {t("third_party_dispute_service")}
          <br />
          {t("third_party_service")}
          <br />
          {t("user")}
          <br />
          {t("verification_icons")}
        </div>
        {/* <p>&nbsp;</p> */}
        <h6 className="text-[15px] font-bold">
          {t("rules_of_interpretation")}
        </h6>
        <div>
          In the Taklief Agreement and all Policies, except where the context
          otherwise requires:
          <ul className="list-disc px-4">
            <li>{t("rule_a")}</li>
            <li>{t("rule_b")}</li>
            <li>{t("rule_c")}</li>
            <li>{t("rule_d")}</li>
            <li>{t("rule_e")}</li>
            <li>{t("rule_f")}</li>
            <li>{t("rule_g")}</li>
            <li>{t("rule_h")}</li>
            <li>{t("rule_i")}</li>
            <li>{t("rule_j")}</li>
          </ul>
        </div>
        <p>{t("revised_date")}</p>
        <ul>
          <br />
          <li>&nbsp;</li>
        </ul>
      </div>
      <CommunityHero />
    </section>
  );
}
