import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import TimeSince from "../Components/TimeSince";

interface Experience {
  title: string;
  date?: Date;
}

interface ExpSkillsType {
  type: "Experience" | "Skills";
  items: Experience[];
}

export default function Content() {
  const theme = useTheme();

  const experienceObj: ExpSkillsType[] = [
    {
      type: "Experience",
      items: [
        {
          title: "Enterprise Software Development",
          date: new Date("2022-01-01"),
        },
        {
          title: "Tier 1 Provider Network Provisioning",
          date: new Date("2013-12-01"),
        },
        {
          title: "Python",
          date: new Date("2016-07-01"),
        },
        {
          title: "Django",
          date: new Date("2017-07-01"),
        },
        {
          title: "React w/ TypeScript",
          date: new Date("2023-01-03"),
        },
      ],
    },
    {
      type: "Skills",
      items: [
        {
          title: "Team Leadership",
          date: new Date("2019-01-01"),
        },
        {
          title: "Process Automation",
          date: new Date("2016-01-01"),
        },
        {
          title: "Jenkins CI/CD",
          date: new Date("2023-10-01"),
        },
        {
          title: "Docker",
          date: new Date("2023-07-01"),
        },
        {
          title: "Git",
          date: new Date("2017-06-01"),
        },
      ],
    },
  ];

  return (
    <>
      <Grid container direction={"row"} xs={12}>
        <Grid item xs={12} md={6} px={6} py={{ xs: 5 }}>
          <Card
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              border: `2px ridge ${theme.palette.primary.main}`,
            }}
          >
            <CardHeader
              title="About Me"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.contrastText,
                backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                border: `1px solid ${theme.palette.secondary.main}`,
                borderRadius: "5px",
                boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
                textShadow: "none",
              }}
            />
            <CardContent>
              <Typography variant="h5" align="justify">
                I am a seasoned telecom and networking technician with a decade
                of hands-on experience in the industry. My passion for solving
                complex human problems through programming has led me to
                specialize in the niche fields of network management, process
                automation, and software development. Over the years, I have
                honed my skills to seamlessly integrate technology solutions
                that enhance operational efficiency and drive innovation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5} ml={0}>
          <Card
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              border: `2px ridge ${theme.palette.primary.main}`,
            }}
          >
            <CardHeader
              title="Experience & Skills"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.contrastText,
                backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                border: `1px solid ${theme.palette.secondary.main}`,
                borderRadius: "5px",
                boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
                textShadow: "none",
              }}
            />
            <CardContent>
              <Grid container direction={"row"} spacing={0}>
                {experienceObj.map((exp) => (
                  <Grid item>
                    <Typography variant="h5" component="div">
                      {exp.type}
                    </Typography>
                    <ul>
                      <li>
                        {exp.items.map((item) => (
                          <li>
                            {item.title}:{" "}
                            <strong>
                              {item.date && <TimeSince date={item.date} />}
                            </strong>
                          </li>
                        ))}
                      </li>
                    </ul>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
