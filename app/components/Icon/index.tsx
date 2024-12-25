import dynamic from "next/dynamic";
const PlushIcon = dynamic(() => import("./PlushIcon"), { ssr: false });
const BurgerIcon = dynamic(() => import("./Burger"), { ssr: false });

export {
    PlushIcon,
    BurgerIcon
};
