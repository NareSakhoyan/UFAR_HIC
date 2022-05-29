const handleSubmit = async (e) =>{
    e.preventDefault();
    const main_complains = window.localStorage.getItem("Main_complains");
    const anamnesis_morbi = window.localStorage.getItem("Anamnesis_morbi");
    const growth_and_development = window.localStorage.getItem("Growth_and_development");
    const epidemiological_anamnesis = window.localStorage.getItem("Epidemiological_anamnesis");

    const diagnose_status =  window.localStorage.getItem("Diagnose_Status");
    const diagnose_clinical =  window.localStorage.getItem("Diagnose_Clinical");
    const diagnose =  window.localStorage.getItem("Diagnose");

    const procedure = window.localStorage.getItem("Procedure");
    const proStatus = window.localStorage.getItem("ProStatus");
    const proDate = window.localStorage.getItem("ProDate");
    const observation = window.localStorage.getItem("Observation");
    const obStatus = window.localStorage.getItem("ObStatus");
    const obDate = window.localStorage.getItem("ObDate");

    const medication = window.localStorage.getItem("Medication");
    const medStatus = window.localStorage.getItem("MedStatus");
    const medDate = window.localStorage.getItem("MedDate");

    const response = await fetch("%URL%",{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            main_complains: main_complains,
            anamnesis_morbi: anamnesis_morbi,
            growth_and_development: growth_and_development,
            epidemiological_anamnesis: epidemiological_anamnesis,

            diagnose_status: diagnose_status,
            diagnose_clinical: diagnose_clinical,
            diagnose: diagnose,

            procedure: procedure,
            procedure_status: proStatus,
            procedure_date: proDate,
            observation: observation,
            observation_status: obStatus,
            observation_date: obDate,

            medication: medication,
            medication_status: medStatus,
            medication_date: medDate,
        }),
    });
    console.log("Response: ", response);
};
const finalForm = document.querySelector("#myForm");
finalForm.addEventListener("submit", handleSubmit);
EventListener("submit", handleSubmit);