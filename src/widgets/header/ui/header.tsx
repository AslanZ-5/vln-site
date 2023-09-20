import { NAVIGATION_MENU_LIST } from "../constans";
import {
  Wrapper,
  Logo,
  Navigation,
  RightSide,
  Personal,
  User,
  Search,
} from "./header.styles";

import { LogoIcon, SearchIcon, PackIcon, UserIcon } from "@/shared/assets/svg";
import Link from "next/link";

export function Header() {
  return (
    <Wrapper>
      <Logo>
        <LogoIcon />
      </Logo>
      <Navigation>
        {NAVIGATION_MENU_LIST.map((list) => (
          <div key={list.id}>
            <Link href={list.path}>{list.label}</Link>
          </div>
        ))}
      </Navigation>
      <RightSide>
        <Search>
          <SearchIcon />
        </Search>
        <User>
          <UserIcon />
        </User>
        <Personal>
          <PackIcon />
          Личный кабинет
        </Personal>
      </RightSide>
    </Wrapper>
  );
}
