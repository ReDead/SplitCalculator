import tkinter as tk
window = tk.Tk()
window.title('Split Calculator')

distance = 0
time = 0

greeting1 = tk.Label(text='================================')
greeting2 = tk.Label(text='-+- Average Split Calculator -+-')
greeting3 = tk.Label(text='================================')
greeting4 = tk.Label(text='================================')
space = tk.Label(text= '''  
 
  
  
  
 
  
''')

number1 = tk.StringVar()
spaces = '               '

greeting1.pack()
greeting2.pack()
greeting3.pack()
space.pack()
greeting4.pack()

def get_splits():
    try:
        distance = (ed.get())
        time = (et.get())

        distance = str(distance)
        time = str(time)

        if distance[-1] == 'm':
            distance = distance.rstrip(distance[-1])
        elif distance[-1] == 'k':
            distance = distance.rstrip(distance[-1])
            distance = int(distance) * 1000
        distance = int(distance)
        laps = distance / 400
        miles = laps / 4

        if len(time) == 5 and time[2] == ':':
            minutes = int(time[0:2])
            seconds = int(time[3:5])
        elif len(time) == 4 and time[1] == ':':
            minutes = int(time[0:1])
            seconds = int(time[2:4])        
        elif len(time) == 2:
            minutes = 0
            seconds = int(time)        
        elif len(time) == 5 and time[2] == '.':
            minutes = 0
            seconds = float(time)        
        elif len(time) == 4 and time[2] == '.':
            minutes = 0
            seconds = float(time)        
        elif len(time) == 7 and time[1] == ':' and time[4] == ':':
            minutes = int(time[2:4]) + 60 * int(time[0:1])
            seconds = int(time[5:7])        

        total_seconds = (minutes * 60) + seconds
        lap_time = total_seconds / laps
        if lap_time < 100:
            lap_time = str(round(lap_time, 2))
        else:
            m = 0
            s = round(lap_time)
            while s >= 60:
                m += 1
                s -= 60
            if s < 10:
                s = '0' + str(s)
            lap_time = str(m) + ":" + str(s)

        m = minutes / miles
        s = seconds / miles
        ms = m - int(m)
        m = int(m)
        s += (ms * 60)
        while s >= 60:
            m += 1
            s -= 60
        s = round(s)
        if s < 10:
            s = '0' + str(s)
        mile_time = str(m) + ":" + str(s)
        
        split1 = tk.Label(text = 'Average 400 Split:\t\t' + lap_time + spaces)
        split1.place(x=10, y=150)

        split2 = tk.Label(text = 'Average Mile pace:\t' + mile_time + spaces)
        split2.place(x=10, y=170)
    except:
        error1 = tk.Label(text = f'Invalid Entry{spaces}{spaces}{spaces}')
        error1.place(x=10, y=150)
        error2 = tk.Label(text = f'{spaces}{spaces}{spaces}{spaces}')
        error2.place(x=10, y=170)

    
#widgets
dist = tk.Label(text="Distance")
time = tk.Label(text="Time")
col = tk.Label(text=":")
m = tk.Label(text="m")
ed = tk.Entry(window, textvariable=number1)
et = tk.Entry()
runbutton = tk.Button(window, text='Get Splits', width=10, command = get_splits)


#place widgets
dist.place(x=10, y=70)
time.place(x=10, y=90)
ed.place(x=80, y=70, width = 45)
et.place(x=80, y=90, width = 45)
m.place(x=125, y=70)
runbutton.place(x=150, y=75)


window.mainloop()
