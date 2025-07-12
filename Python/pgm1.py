def pay(pay,time):
    daily=pay*time
    return print("Your daily wage is:",daily)
    if(time>=40):
        extratime=time-40;
        extrapay=extratime*1.5*pay;
        daily=pay*40+extrapay;
        print("Your daily wage is:",daily)


pay(10,45)
