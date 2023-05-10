/**
* use this to create a table in BigQuery to collect
* NWEA MAP combostudentassessment data
***/
function createBQDB() {
  let projectId = 'YOUR-PROJECT-ID';
  let dataSetId = 'YOUR_DATASET_ID';
  let table = `{
    "tableReference": {
        "projectId": "${projectId}",
        "datasetId": "${dataSetId}",
        "tableId": "nwea_combo_student_assessments"
    },
    "schema": {
        "fields": [
            {
                "name": "Combo_Assessment_ID",
                "type": "INTEGER",
                "mode": "REQUIRED"
            },
            {
                "name": "TermName",
                "type": "STRING"
            },
            {
                "name": "DistrictName",
                "type": "STRING"
            },
            {
                "name": "District_StateID",
                "type": "STRING"
            },
            {
                "name": "SchoolName",
                "type": "STRING"
            },
            {
                "name": "School_StateID",
                "type": "STRING"
            },
            {
                "name": "StudentLastName",
                "type": "STRING"
            },
            {
                "name": "StudentFirstName",
                "type": "STRING"
            },
            {
                "name": "StudentMI",
                "type": "STRING"
            },
            {
                "name": "StudentID",
                "type": "STRING"
            },
            {
                "name": "Student_StateID",
                "type": "STRING"
            },
            {
                "name": "StudentDateOfBirth",
                "type": "STRING"
            },
            {
                "name": "StudentEthnicGroup",
                "type": "STRING"
            },
            {
                "name": "NWEAStandard_EthnicGroup",
                "type": "STRING"
            },
            {
                "name": "StudentGender",
                "type": "STRING"
            },
            {
                "name": "Grade",
                "type": "STRING"
            },
            {
                "name": "NWEAStandard_Grade",
                "type": "STRING"
            },
            {
                "name": "Subject",
                "type": "STRING"
            },
            {
                "name": "Course",
                "type": "STRING"
            },
            {
                "name": "NormsReferenceData",
                "type": "STRING"
            },
            {
                "name": "WISelectedAYFall",
                "type": "INTEGER"
            },
            {
                "name": "WISelectedAYWinter",
                "type": "INTEGER"
            },
            {
                "name": "WISelectedAYSpring",
                "type": "INTEGER"
            },
            {
                "name": "WIPreviousAYFall",
                "type": "INTEGER"
            },
            {
                "name": "WIPreviousAYWinter",
                "type": "INTEGER"
            },
            {
                "name": "WIPreviousAYSpring",
                "type": "INTEGER"
            },
            {
                "name": "TestType",
                "type": "STRING"
            },
            {
                "name": "TestName",
                "type": "STRING"
            },
            {
                "name": "TestStartDate",
                "type": "STRING"
            },
            {
                "name": "TestStartTime",
                "type": "STRING"
            },
            {
                "name": "TestDurationMinutes",
                "type": "INTEGER"
            },
            {
                "name": "TestRITScore",
                "type": "INTEGER"
            },
            {
                "name": "TestStandardError",
                "type": "FLOAT"
            },
            {
                "name": "TestPercentile",
                "type": "INTEGER"
            },
            {
            "name": "AchievementQuintile",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "PercentCorrect",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "RapidGuessingPercentage",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToFallProjectedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "FalltoFallObservedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "FalltoFallObservedGrowthSE",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "FalltoFallMetProjectedGrowth",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "FalltoFallConditionalGrowthIndex",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "FalltoFallConditionalGrowthPercentile",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToFallGrowthQuintile",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToWinterProjectedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToWinterObservedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToWinterObservedGrowthSE",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToWinterMetProjectedGrowth",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToWinterConditionalGrowthIndex",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToWinterConditionalGrowthPercentile",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToWinterGrowthQuintile",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToSpringProjectedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToSpringObservedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToSpringObservedGrowthSE",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToSpringMetProjectedGrowth",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToSpringConditionalGrowthIndex",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToSpringConditionalGrowthPercentile",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "FallToSpringGrowthQuintile",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToWinterProjectedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToWinterObservedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToWinterObservedGrowthSE",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToWinterMetProjectedGrowth",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToWinterConditionalGrowthIndex",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToWinterConditionalGrowthPercentile",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToWinterGrowthQuintile",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToSpringProjectedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToSpringObservedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToSpringObservedGrowthSE",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToSpringMetProjectedGrowth",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToSpringConditionalGrowthIndex",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToSpringConditionalGrowthPercentile",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "WinterToSpringGrowthQuintile",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "SpringToSpringProjectedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "SpringToSpringObservedGrowth",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "SpringToSpringObservedGrowthSE",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "SpringToSpringMetProjectedGrowth",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "SpringToSpringConditionalGrowthIndex",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "SpringToSpringConditionalGrowthPercentile",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "SpringToSpringGrowthQuintile",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "LexileScore",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "LexileMin",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "LexileMax",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "QuantileScore",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "QuantileMin",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "QuantileMax",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal1Name",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal1RitScore",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal1StdErr",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal1Range",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal1Adjective",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal2Name",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal2RitScore",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal2StdErr",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal2Range",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal2Adjective",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal3Name",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal3RitScore",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal3StdErr",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal3Range",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal3Adjective",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal4Name",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal4RitScore",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal4StdErr",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal4Range",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal4Adjective",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal5Name",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal5RitScore",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal5StdErr",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal5Range",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal5Adjective",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal6Name",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal6RitScore",
            "type": "INTEGER",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal6StdErr",
            "type": "FLOAT",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal6Range",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal6Adjective",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "Goal7Name",
            "type": "STRING"
          },
          {
            "name": "Goal7RitScore",
            "type": "INTEGER"
          },
          {
            "name": "Goal7StdErr",
            "type": "FLOAT"
          },
          {
            "name": "Goal7Range",
            "type": "STRING"
          },
          {
            "name": "Goal7Adjective",
            "type": "STRING"
          },
          {
            "name": "Goal8Name",
            "type": "STRING"
          },
          {
            "name": "Goal8RitScore",
            "type": "INTEGER"
          },
          {
            "name": "Goal8StdErr",
            "type": "FLOAT"
          },
          {
            "name": "Goal8Range",
            "type": "STRING"
          },
          {
            "name": "Goal8Adjective",
            "type": "STRING"
          },
          {
            "name": "AccommodationCategories",
            "type": "STRING"
          },
          {
            "name": "Accommodations",
            "type": "STRING"
          },
          {
            "name": "TypicalFallToFallGrowth",
            "type": "INTEGER"
          },
          {
            "name": "TypicalFallToWinterGrowth",
            "type": "INTEGER"
          },
          {
            "name": "TypicalFallToSpringGrowth",
            "type": "INTEGER"
          },
          {
            "name": "TypicalWintertoWinterGrowth",
            "type": "INTEGER"
          },
          {
            "name": "TypicalWintertoSpringGrowth",
            "type": "INTEGER"
          },
          {
            "name": "TypicalSpringToSpringGrowth",
            "type": "INTEGER"
          },
          {
            "name": "ProjectedProficiencyStudy1",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyLevel1",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyStudy2",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyLevel2",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyStudy3",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyLevel3",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyStudy4",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyLevel14",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyStudy5",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyLevel5",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyStudy6",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyLevel6",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyStudy7",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyLevel7",
            "type": "STRING"
          },
          {
            "name": "ProjectedProficiencyStudy8",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "ProjectedProficiencyLevel8",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "ProjectedProficiencyStudy9",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "ProjectedProficiencyLevel9",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "ProjectedProficiencyStudy10",
            "type": "STRING",
            "mode": "NULLABLE"
          },
          {
            "name": "ProjectedProficiencyLevel10",
            "type": "STRING",
            "mode": "NULLABLE"
          }
        ]
    }
}
`
  let tableCreated = BigQuery.Tables.insert(table,projectId,dataSetId)
  console.log(JSON.stringify(tableCreated))
}
