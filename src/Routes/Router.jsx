import { HelpCenter } from "@mui/icons-material";
import Auth from "../Auth/Auth";
import Experience from "../Pages/Experience/Experience";

const Router =[

    {path:"/", element:<Auth />},
    {path:"/home", element:<Home />},
    {path:"/experience", element:<Experience />},
    {path:"/help", element:<HelpCenter />}
]