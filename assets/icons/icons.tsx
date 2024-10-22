import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons";

export const icons = {
    index: (props)=> <AntDesign name="clockcircle" size={30} {...props} />,
    withdraw: (props)=> <FontAwesome6 name="bitcoin" size={30} {...props} />,
    alarm: (props)=> <AntDesign name="pluscircle" size={30} {...props} />
}
