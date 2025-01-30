import numpy as np
import matplotlib.pyplot as plt

def monte_carlo_pi(num_points):
    inside_circle = 0
    x_vals, y_vals, colors = [], [], []

    for _ in range(num_points):
        x, y = np.random.uniform(-1, 1, 2)
        x_vals.append(x)
        y_vals.append(y)
        if x**2 + y**2 <= 1:
            inside_circle += 1
            colors.append('green')
        else:
            colors.append('red')
    
    pi_estimate = 4 * (inside_circle / num_points)
    return x_vals, y_vals, colors, pi_estimate

def plot_points(x_vals, y_vals, colors):
    plt.scatter(x_vals, y_vals, c=colors, s=1)
    plt.gca().set_aspect('equal')
    plt.title("Monte Carlo Pi Estimation")
    plt.show()

def main():
    num_points = int(input("Enter number of random points: "))
    x_vals, y_vals, colors, pi_estimate = monte_carlo_pi(num_points)
    print(f"Estimated value of Pi: {pi_estimate}")
    plot_points(x_vals, y_vals, colors)

if __name__ == "__main__":
    main()
