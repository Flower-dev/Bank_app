import { useEffect, useState } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { setInfos } from '../redux/slices/user'
// hooks
import  useApi from '../hooks/useApi'
// components
import AccountCard from '../components/AccountCard';
// custom
import '../custom/pages/user.scss';


export default function User() {
    const token = useSelector((state) => state.user.token);
    const firstName = useSelector((state) => state.user.infos.firstName);
    const lastName = useSelector((state) => state.user.infos.lastName);
    const [firstNameForm, setFirstNameForm] = useState('');
    const [lastNameForm, setLastNameForm] = useState('');
    const [displayForm, setDisplayForm] = useState(false);
    const dispatch = useDispatch();

    const onFirstNameChange = (e) => {
        setFirstNameForm(e.target.value);
    }

    const onLastNameChange = (e) => {
        setLastNameForm(e.target.value);
    }

    useEffect(() => {
        try {
            const getInfos = async () => {
                const userData = await useApi.getInfos(token);
                const { email, firstName, lastName, id } = userData;
                const infos = { email, firstName, lastName, id };
                dispatch(setInfos(infos));
                setFirstNameForm(firstName);
                setLastNameForm(lastName);
            }
            getInfos();
        } catch (e) {
            console.log(e);
        }
    }, [token]);

    const onEdit = () => {
        if (!displayForm) {
            setDisplayForm(true);
        }
    }

    const onSave = async (e) => {
        try {
            e.preventDefault();
            const updateUserData = await useApi.updateInfos(firstNameForm, lastNameForm, token);
            const { firstName, lastName } = updateUserData;
            const infosUpdate = { firstName, lastName };
            dispatch(setInfos(infosUpdate));
            if (displayForm) {
                setDisplayForm(false);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const onCancel = () => {
        if (displayForm) {
            setDisplayForm(false);
        }
    }
 
    const DATA = [
        {
            id: 1,
            title: 'Argent Bank Checking (x8349)',
            amount: '$2,082.79',
            description: 'Available Balance',
        },
        {
            id: 2,
            title: 'Argent Bank Savings (x6712)',
            amount: '$10,928.42',
            description: 'Available Balance',
        },
        {
            id: 3,
            title: 'Argent Bank Credit Card (x8349)',
            amount: '$184.30',
            description: 'Current Balance',
        }
    ]

    return (
        <div className='main bg-dark'>
            <div className='header'>
                <h1>Welcome back</h1>
                { displayForm ?
                    (
                        <form>
                            <input type='text' onChange={onFirstNameChange} value={firstNameForm} placeholder={firstNameForm} />
                            <input type='text' onChange={onLastNameChange} value={lastNameForm} placeholder={lastNameForm} />
                            <div>
                                <button onClick={onSave} className='edit-button'>Save</button>
                                <button onClick={onCancel} className='edit-button'>Cancel</button>
                            </div>
                        </form>
                    ) :
                    (
                        <div>
                            <h1>{firstName} {lastName}!</h1>
                            <button onClick={onEdit} className='edit-button'>Edit Name</button>
                        </div>
                    )
                }
            </div>
            {DATA.map((item) => {
                return (
                    <AccountCard
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        description={item.description}
                    />
                )
            })}
        </div>
    )
}