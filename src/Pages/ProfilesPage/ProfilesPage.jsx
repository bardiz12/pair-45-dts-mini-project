import React from 'react';
import userImage from '../../data/userImage';
import UserBox from './Components/UserBox';
import SvgAdd from '../../assets/button/add.svg';
import { useSelector } from 'react-redux';
import { selectUserList } from '../../store/userStore';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../utils/useTitle';
import RedButton from '../../Components/Buttons/RedButton';

const ProfilesPage = function () {
    const userList = useSelector(selectUserList)
    const navigate = useNavigate()
    useTitle('Pilih Profile')
    return (
        <>
            <div className='flex flex-col w-full items-center justify-center gap-10 py-6 bg-netflix-dark text-white' style={{ height: "calc(100vh - 85px)" }}>
                <h1 className='text-5xl'>Who's Watching ?</h1>
                <div className='flex w-full justify-center gap-4 items-center'>
                    {
                        userList.map(user => {
                            return <UserBox key={user.email} user={{ ...user, photoURL: userImage.getImage(user.photoURL) }} onClick={(e) => navigate('auth/login', {
                                state: user
                            })} />
                        })
                    }
                    <Link to='/auth/register'>
                        <div className='w-32 h-full flex justify-center items-center pb-4'>
                            <div>
                                <img src={SvgAdd} className="w-24 hover:w-32 hover:cursor-pointer" alt="add button" />
                                <br />
                                <span>Create Profile</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='w-64'>
                    <Link to="/movie">
                        <RedButton>Just, bring me to the Movie List</RedButton>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ProfilesPage