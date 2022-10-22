window.addEventListener('load', () => {
    
    const params = (new URL(document.location)).searchParams;
    
    const FULLNAME = params.get('name');
    const EMAIL = params.get('email');
    const PHONENUMBER = params.get('mobile');
    
    
    
    
    document.getElementById('result-entryFullName').innerHTML = FULLNAME;
    document.getElementById('result-entryeMail').innerHTML = EMAIL;
    document.getElementById('result-entryphoneNumber').innerHTML = PHONENUMBER;

    
    
    
    
    })
