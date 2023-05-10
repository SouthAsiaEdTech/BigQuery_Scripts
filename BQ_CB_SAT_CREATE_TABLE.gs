/**
* use this to create a table  a table in BigQuery to collect
* Collegeboard SAT data
***/

function createBqTable(){
    let projectId = 'YOUR-PROJECT-ID';
    let dataSetId = 'YOUR_DATASET_ID';
  let table = `{
  "tableReference": {
    "projectId": "${projectId}",
    "datasetId": "${dataSet}",
    "tableId": "cb_sat_data"
  },
  "schema": {
    "fields": [
      {
        "name": "SAT_DataKey",
        "type": "INTEGER",
        "mode": "REQUIRED"
      },
      {
        "name": "AI_CODE",
        "type": "INTEGER",
        "mode": "REQUIRED"
      },
      {
        "name": "AI_NAME",
        "type": "STRING",
        "mode": "REQUIRED"
      },
      {
        "name": "FILLER_1",
        "type": "STRING"
      },
      {
        "name": "COHORT_YEAR",
        "type": "INTEGER",
        "mode": "REQUIRED"
      },
      {
        "name": "DISTRICT_NAME",
        "type": "STRING"
      },
      {
        "name": "NAME_LAST",
        "type": "STRING",
        "mode": "REQUIRED"
      },
      {
        "name": "NAME_FIRST",
        "type": "STRING",
        "mode": "REQUIRED"
      },
      {
        "name": "NAME_MI",
        "type": "STRING"
      },
      {
        "name": "SEX",
        "type": "STRING",
        "mode": "REQUIRED"
      },
      {
        "name": "RACE_ETH_CUBAN",
        "type": "STRING"
      },
      {
        "name": "RACE_ETH_MEXICAN",
        "type": "STRING"
      },
      {
        "name": "RACE_ETH_PUERTORICAN",
        "type": "STRING"
      },
      {
        "name": "RACE_ETH_HISP_LAT",
        "type": "STRING"
      },
      {
        "name": "RACE_ETH_NON_HISP_LAT",
        "type": "STRING"
      },
      {
        "name": "RACE_ETH_INDIAN_ALASKAN",
        "type": "STRING"
      },
      {
        "name": "RACE_ETH_ASIAN",
        "type": "STRING"
      },
      {
        "name": "RACE_ETH_AFRICANAMERICAN",
        "type": "STRING"
      },
      {
        "name": "RACE_ETH_HAWAIIAN_PI",
        "type": "STRING"
      },
      {
        "name": "RACE_ETH_WHITE",
        "type": "STRING"
      },
      {
        "name": "RACE_ETH_OTHER",
        "type": "STRING"
      },
      {
        "name": "FILLER_2",
        "type": "STRING"
      },
      {
        "name": "DERIVED_AGGREGATE_RACE_ETH",
        "type": "INTEGER",
        "mode": "REQUIRED"
      },
      {
        "name": "BIRTH_DATE",
        "type": "DATE",
        "mode": "REQUIRED"
      },
      {
        "name": "FILLER_3",
        "type": "STRING"
      },
      {
        "name": "CB_ID",
        "type": "INTEGER",
        "mode": "REQUIRED"
      },
      {
        "name": "SECONDARY_ID",
        "type": "INTEGER"
      },
      {
        "name": "ADDRESS_LINE1",
        "type": "STRING",
        "mode": "REQUIRED"
      },
      {
        "name": "ADDRESS_LINE2",
        "type": "STRING"
      },
      {
        "name": "ADDRESS_CITY",
        "type": "STRING",
        "mode": "REQUIRED"
      },
      {
        "name": "ADDRESS_STATE",
        "type": "STRING"
      },
      {
        "name": "ADDRESS_ZIP",
        "type": "INT64"
      },
      {
        "name": "ADDRESS_COUNTY",
        "type": "INT64"
      },
      {
        "name": "ADDRESS_COUNTRY",
        "type": "STRING",
        "mode": "REQUIRED"
      },
      {
        "name": "ADDRESS_PROVINCE",
        "type": "STRING"
      },
      {
        "name": "FOREIGN_ADDRESS",
        "type": "STRING"
      },
      {
        "name": "PHONE",
        "type": "STRING"
      },
      {
        "name": "EMAIL",
        "type": "STRING",
        "mode": "REQUIRED"
      },
      {
        "name": "HOMESCHOOL",
        "type": "STRING"
      },
      {
        "name": "STUDENT_SEARCH_SERVICE",
        "type": "STRING"
      },
      {
        "name": "PROJ_GRAD_DATE",
        "type": "STRING"
      },
      {
        "name": "SAA",
        "type": "STRING"
      },
      {
        "name": "LATEST_REGISTRATION_NUM",
        "type": "INT64"
      },
      {
        "name": "LATEST_MAKE_UP",
        "type": "STRING"
      },
      {
        "name": "LATEST_ASSESSMENT_DATE",
        "type": "DATE"
      },
      {
        "name": "LATEST_GRADE_LEVEL",
        "type": "INT64"
      },
      {
        "name": "LATEST_REVISED",
        "type": "STRING"
      },
      {
        "name": "LATEST_SAT_TOTAL",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_EBRW",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_MATH_SECTION",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_READING",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_WRIT_LANG",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_MATH_TEST",
        "type": "NUMERIC"
      },
      {
        "name": "LATEST_SAT_SCI_CROSS",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_HIST_SOCST_CROSS",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_WORDS_CONTEXT",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_COMM_EVIDENCE",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_EXPR_IDEAS",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_ENG_CONVENT",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_HEART_ALGEBRA",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_ADV_MATH",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_PROBSLV_DATA",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_ESSAY_READING",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_ESSAY_ANALYSIS",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_ESSAY_WRITING",
        "type": "INT64"
      },
      {
        "name": "FILLER_4",
        "type": "STRING"
      },
      {
        "name": "LATEST_SAT_CRITICAL_READING",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_MATH",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_WRITING",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_ESSAY",
        "type": "INT64"
      },
      {
        "name": "LATEST_SAT_ESSAY_MC",
        "type": "INT64"
      },
      {
        "name": "FILLER_5",
        "type": "STRING"
      },
      {
        "name": "FILLER_6",
        "type": "STRING"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_TOTAL",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_EBRW",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_MATH_SECTION",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_READING",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_WRIT_LANG",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_MATH_TEST",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_SCI_CROSS",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_HIST_SOCST_CROSS",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_WORDS_CONTEXT",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_COMM_EVIDENCE",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_EXPR_IDEAS",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_ENG_CONVENT",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_HEART_ALGEBRA",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_ADV_MATH",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATREP_SAT_PROBSLV_DATA",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_CBSNATION_SAT_CRITICAL_READING",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_CBSNATION_SAT_MATH",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_CBSNATION_SAT_WRITING",
        "type": "INT64"
      },
      {
        "name": "FILLER_7",
        "type": "STRING"
      },
      {
        "name": "FILLER_8",
        "type": "STRING"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_TOTAL",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_EBRW",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_MATH_SECTION",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_READING",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_WRIT_LANG",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_MATH_TEST",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_SCI_CROSS",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_HIST_SOCST_CROSS",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_WORDS_CONTEXT",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_COMM_EVIDENCE",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_EXPR_IDEAS",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_ENG_CONVENT",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_HEART_ALGEBRA",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_ADV_MATH",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_NATUSER_SAT_PROBSLV_DATA",
        "type": "INT64"
      },
      {
        "name": "PERCENTILE_CBSSTATE_SAT_CRITICAL_READING",
        "type": "STRING"
      },
      {
        "name": "PERCENTILE_CBSSTATE_SAT_MATH",
        "type": "STRING"
      },
      {
        "name": "PERCENTILE_CBSSTATE_SAT_WRITING",
        "type": "STRING"
      },
      {
        "name": "FILLER_9",
        "type": "STRING"
      },
      {
        "name": "FILLER_10",
        "type": "STRING"
      },
      {
        "name": "EBRW_CCR_BENCHMARK",
        "type": "STRING"
      },
      {
        "name": "MATH_CCR_BENCHMARK",
        "type": "STRING"
      }
    ]
  }
}`
  let tableCreated = BigQuery.Tables.insert(table,projectId,dataSet)
  console.log(JSON.stringify(tableCreated))

}
