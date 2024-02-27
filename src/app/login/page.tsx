'use client';
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button, TextField } from "@mui/material";
import SocialButton from "./components/SocialButton";
import LoginBgImage from "./components/LoginBgImage";
import LoginLogo from "./components/LoginLogo";

export default function SignInTest(){
    const { data: session } = useSession();
    if (session) {
        redirect(`/`);
    }

    const socialLoginClick = () => {
        // Social Login click logic
    };
    
    return(
        <div className="bg-white">
            <div className="flex h-[1024px]">
                <LoginBgImage/>
                <div id="triangle" className="relative my-auto transform -translate-x-1/2">
                    <div className="w-24 h-24 bg-white transform rotate-45 rounded-b-lg"></div>
                </div>
                <div id="login-section" className="flex flex-col items-center w-[596px]">
                    <div id="logo" className="mt-[64px]"><LoginLogo signIn={true}/></div>
                    <div id="login-form">
                        <div className="flex flex-col items-center">
                            <div className="mt-[20px]">
                                <TextField
                                    id="email"
                                    placeholder="example@gamedoora.com"
                                    label="Username"
                                    color="warning"
                                    sx={{
                                        color:'#FFE4CC',
                                        backgroundColor:'FFE4CC',
                                        width:'396px',
                                        height:'56px',
                                    }}
                                />
                            </div>
                            <div className="mt-8">
                                <TextField
                                    id="password"
                                    placeholder="********"
                                    label="Password"
                                    color="warning"
                                    sx={{
                                        width:'396px',
                                        height:'56px',
                                    }}
                                />
                            </div>
                            <div className="mt-10">
                                <Button 
                                    variant="contained"
                                    className="font-medium bg-orange-100"
                                    sx={{color: '#FF7600',
                                        backgroundColor:'#FFE4CC',
                                        '&:hover':{
                                            backgroundColor:'#FFE4CC'
                                        },
                                        width:'396px',
                                        height:'56px',                                          
                                    }}>
                                    Login
                                </Button>
                            </div>
                        </div>
                        <div id="reset-account" className="flex mt-5 flex-col items-center">
                            <div className="w-[368px] h-[40px] flex justify-center items-center">
                                <p className="font-roboto font-medium text-center text-sm"
                                    style={{color:'#26221F'}}> Having trouble logging in?&nbsp;
                                    <Link
                                        href={'/sign-test'}
                                        className="font-medium text-sm"
                                        style={{color:'#FFA04D'}}>
                                        Forgot username or password
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                        <div id="divider" className="flex flex-row justify-center w-[560px] h-[20px]">
                            <div className="w-[190px] mt-5 border-t border-gray-400 "></div>
                            <div className="mx-1 mt-[10px] w-[14px] h-[20px]">or</div>
                            <div className="w-[184px] mt-5 border-t border-gray-400"></div>
                        </div>
                        <div id="socials" className="flex flex-col mt-10 justify-cente items-center">
                            <div>
                                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                                    <SocialButton 
                                        color="#D62D20"
                                        iconPath="google.svg"
                                        socialName="Google"
                                        onClick={socialLoginClick}
                                    />
                                    <SocialButton 
                                        color="#24292E"
                                        iconPath="git.svg"
                                        socialName="GitHub"
                                        onClick={socialLoginClick}
                                    />
                                    <SocialButton 
                                        color="#000000"
                                        iconPath="x.svg"
                                        socialName="X"
                                        onClick={socialLoginClick}
                                    />
                                    <SocialButton 
                                        color="#3B5998"
                                        iconPath="meta.svg"
                                        socialName="Facebook"
                                        onClick={socialLoginClick}
                                    />
                                </div>
                            </div>
                        </div>
                        <div id="create-account" className="mt-5 ml-[70px] w-[160px] h-[40px]">
                            <Link href={'/'}
                                className="font-roboto"
                                style={{color:'#FFA04D', height:'20px'}} >
                                Create an account
                            </Link>
                        </div>
                    </div>
                    <div id="login-footer" className="flex flex-row justify-between gapx-8 mt-auto ml-8 mb-4 mr-8 w-[532px] h-[40px]">
                        <div className="w-[146px] h-[40px]">English</div>
                        <div className="h-10 flex flex-row gap-x-8">
                            <div className="w-[54px] h-[40px]">
                                <Link
                                    href={'/sign-test'}
                                    className="w-[30px] h-[20px] font-medium font-roboto"
                                    style={{color:'#26221F'}}>
                                        Help
                                </Link>
                            </div>
                            <div className="w-[71px] h-[40px]">
                                <Link
                                    href={'/sign-test'}
                                    className="w-[47px] h-[20px] font-medium font-roboto"
                                    style={{color:'#26221F'}}>
                                        Privacy
                                </Link>
                            </div>
                            <div className="w-[65px] h-[40px]">
                                <Link
                                    href={'/sign-test'}
                                    className="w-[41px] h-[20px] font-medium font-roboto"
                                    style={{color:'#26221F'}}>
                                        Terms
                                </Link>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}